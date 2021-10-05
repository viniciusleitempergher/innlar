import React, { useEffect, useState } from 'react';

import { Text } from "react-native";
import { useAuth } from '../../hooks/auth';
import { api } from '../services/api';

export function Conversations() {
    const [chats, setChats] = useState();

    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            const chatsResponse = await api.get("/users/my-chats");

            setChats(chatsResponse.data.chats);

            console.log(chats);
        })();
    }, [])

    return (
        <Text>{JSON.stringify(chats)}</Text>
    )
}