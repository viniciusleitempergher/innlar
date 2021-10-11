import React, { createContext, Dispatch, SetStateAction, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { api } from "../services/api";
import * as SecureStore from 'expo-secure-store';
import { Loading } from "../components/loading";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

type User = {
    id: string,
    name: string,
    avatar: string,
    email: string,
    phoneNumber: string,
    accessToken: string,
    refreshToken: string,
}

type AuthContextData = {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    signIn: (email: string, password: string) => Promise<void | number>;
    googleSignin: VoidFunction;
    user: User;
    signOut: VoidFunction;
}

type BackendResponse = {
    accessToken: string;
    refreshToken: string;
};

type AuthProviderProps = {
    children: ReactNode,
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({} as User);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const accessToken = await SecureStore.getItemAsync("accessToken");
                const refreshToken = await SecureStore.getItemAsync("refreshToken");

                if (accessToken && refreshToken) {
                    let user = await prepareUser(accessToken, refreshToken);
                    setUser(user);
                }
            } catch (e) {
                throw e;
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    async function signIn(email: string, password: string) {
        setLoading(true);

        return new Promise<void>(async (resolve) => {
            try {
                await signOut();
                await (() => {
                    return new Promise((resolve) => {
                        setTimeout(resolve, 2000);
                    })
                })()

                const tokensResponse = await api.post("/auth/login", {
                    email,
                    password
                })

                handleWithResponse(tokensResponse.data);

                resolve()
            } catch (e: any) {
                resolve(e.response.status);
            } finally {
                setLoading(false)
            }
        })
    }

    const [request, response, promptAsync] = Google.useAuthRequest({
        responseType: 'id_token',
        expoClientId: '648197320786-mcu8ni0jrqjoeaoi95cforg0cmrjcacb.apps.googleusercontent.com',
        iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        webClientId: '648197320786-mcu8ni0jrqjoeaoi95cforg0cmrjcacb.apps.googleusercontent.com',
    });

    async function googleSignin() {
        promptAsync();
    }

    useEffect(() => {
        (async () => {
            if (response && response.type === 'success') {
                setLoading(true);
                try {
                    await signOut();
                    let idToken = response.params.id_token;

                    const tokensResponse = await api.post("/auth/google-login", {
                        token: idToken
                    })

                    await handleWithResponse(tokensResponse.data);
                } catch (e) {
                    throw e;
                } finally {
                    setLoading(false);
                }
            }
        })();
    }, [response]);

    async function handleWithResponse(data: BackendResponse) {
        const { accessToken, refreshToken } = data;

        console.log(accessToken, refreshToken);

        await SecureStore.setItemAsync("accessToken", accessToken);
        await SecureStore.setItemAsync("refreshToken", refreshToken);

        let user = await prepareUser(accessToken, refreshToken);

        setUser(user)
    }

    async function prepareUser(accessToken: string, refreshToken: string) {
        api.defaults.headers.authorization = `Bearer ${accessToken}`

        const userResponse = await api.get("/users/me");

        let user: User = userResponse.data;

        user.accessToken = accessToken;
        user.refreshToken = refreshToken;

        return user;
    }

    async function signOut() {
        api.defaults.headers.authorization = '';
        await SecureStore.setItemAsync("accessToken", '');
        await SecureStore.setItemAsync("refreshToken", '');
        setUser({} as User);
    }

    api.interceptors.response.use((response) => response, async (error) => {
        if (error.status == 401) {
            const originalRequest = error.config

            const response = await api.post("/auth/refresh", {
                token: user.refreshToken
            });

            if (response.status == 200) {
                handleWithResponse(response.data);
                return await api(originalRequest);
            } else {
                signOut();
            }

            return;
        }
        throw error;
    });

    return (
        <AuthContext.Provider value={{
            setLoading,
            loading,
            user,
            signIn,
            googleSignin,
            signOut,
        }}>
            {
                loading
                    ?
                    <Loading />
                    :
                    children
            }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}