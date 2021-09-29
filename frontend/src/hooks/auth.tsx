import React, { createContext, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../screens/services/api";

type User = {
    id: string,
    name: string,
    avatar: string,
    email: string,
}

type AuthContextData = {
    //user: User,
    loading: boolean,
    signIn: (email: string, password: string) => Promise<any>,
    user: any;
    //signOut: () => Promise<void>,
}

type AuthProviderProps = {
    children: ReactNode,
}


export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    async function signIn(email: string, password: string) {
        setLoading(true);
        try {
            return new Promise(async (resolve) => {
                const response = await api.post("/auth/login", {
                    email,
                    password
                })

                const { accessToken, refreshToken } = response.data;

                await AsyncStorage.setItem("accessToken", accessToken);
                await AsyncStorage.setItem("refreshToken", refreshToken);

                api.defaults.headers.authorization = `Bearer ${accessToken}`

                let user = (await api.get("/users/me")).data;

                setUser(user)

                resolve(response)
            })
        } catch (e) {
            throw e
        } finally {
            setLoading(false)
        }
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