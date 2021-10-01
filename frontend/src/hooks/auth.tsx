import React, { createContext} from "react";
import { useContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../screens/services/api";

type User = {
    name: string,
    avatar: string,
    email: string,
    phoneNumber: string,
}

type AuthContextData = {
    //user: User,
    loading: boolean,
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

    async function signIn(email: string, password: string) {
        setLoading(true);

        return new Promise<void>(async (resolve) => {
            try {
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

                await AsyncStorage.setItem("accessToken", accessToken);
                await AsyncStorage.setItem("refreshToken", refreshToken);

                api.defaults.headers.authorization = `Bearer ${accessToken}`

                const userResponse = await api.get("/users/me");

                let user: User = userResponse.data;

                setUser(user)
                resolve()
            } catch (e) {
                resolve(e.response.status);
            } finally {
                setLoading(false)
            }
        })
    }

    return (
        <AuthContext.Provider value={{
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