import React, { createContext, Dispatch, SetStateAction, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../services/api";
import * as SecureStore from 'expo-secure-store';

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
    //user: User,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    signIn: (email: string, password: string) => Promise<void | number>,
    user: User;
    //signOut: () => Promise<void>,
}

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
                api.defaults.headers = "";
                await (() => {
                    return new Promise((resolve) => {
                        setTimeout(resolve, 2000);
                    })
                })()

                const response = await api.post("/auth/login", {
                    email,
                    password
                })

                const { accessToken, refreshToken } = response.data;

                await SecureStore.setItemAsync("accessToken", accessToken);
                await SecureStore.setItemAsync("refreshToken", refreshToken);

                let user = await prepareUser(accessToken, refreshToken);

                setUser(user)
                resolve()
            } catch (e) {
                resolve(e.response.status);
            } finally {
                setLoading(false)
            }
        })
    }

    async function prepareUser(accessToken: string, refreshToken: string) {
        api.defaults.headers.authorization = `Bearer ${accessToken}`

        const userResponse = await api.get("/users/me");

        let user: User = userResponse.data;

        user.accessToken = accessToken;
        user.refreshToken = refreshToken;

        return user;
    }

    return (
        <AuthContext.Provider value={{
            setLoading,
            loading,
            user,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}