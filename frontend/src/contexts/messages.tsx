import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useContext } from "react";
import { ReactNode } from "react";
import { Loading } from "../components/loading";
import { api } from "../services/api";
import { socket } from "../services/chat";
import { ChatType } from "../types/chat";
import { MessageType } from "../types/message";
import { useAuth } from "./auth";

type MessagesContextData = {
    chats: Array<ChatType>;
    loading: boolean;
    setChats: Dispatch<SetStateAction<ChatType[]>>;
}

type MessagesProviderProps = {
    children: ReactNode,
}


export const MessagesContext = createContext({} as MessagesContextData)

export function MessagesProvider({ children }: MessagesProviderProps) {
    const { user } = useAuth();

    const [loading, setLoading] = useState(true);
    const [chats, setChats] = useState([] as Array<ChatType>);

    useEffect(() => {
        (async () => {
            try {
                const chatsResponse = await api.get("/users/my-chats");

                setChats(chatsResponse.data.chats);

                setLoading(false);

                socket.auth = { userId: user.id };
                socket.connect();

                socket.on("new message", (message: MessageType) => {
                    let chatsCopy = chatsResponse.data.chats.slice();
                    let flag = false;
                    chatsCopy.forEach((chat: ChatType) => {
                        if (chat.users.filter(user => message.sender.id == user.id)) {
                            chat.messages.push(message);
                            flag = true;
                        }
                    });
                    if (!flag) {
                        chatsCopy.push({
                            users: [
                                message.sender,
                                user
                            ],
                            messages: [
                                message
                            ]
                        })
                    }
                    setChats(chatsCopy)
                });
            } catch (e) {
                throw e;
            } finally {
                setLoading(false)
            }
        })();
    }, []);

    return (
        <MessagesContext.Provider value={{
            chats,
            loading,
            setChats
        }}>
            {
                loading ?
                    <Loading />
                    :
                    children
            }
        </MessagesContext.Provider>
    )
}

export function useMessages() {
    const context = useContext(MessagesContext)
    return context
}