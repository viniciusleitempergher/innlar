import React, { useState } from 'react';

import { useEffect } from "react";
import { Text } from "react-native";
import { useAuth } from '../../hooks/auth';
import { socket } from "../services/chat";

export function Chat() {
    const [messages, setMessages] = useState<any>([]);

    const { user } = useAuth();

    useEffect(() => {
        socket.auth = { userId: user.id };
        socket.connect();

        socket.on("new message", (message: any) => {
            setMessages((prevMessages: any) => [...prevMessages, message]);
        });
    }, [])

    useEffect(() => {
        console.log(messages);
    }, [messages])

    return (
        <Text>Login</Text>
    );
}