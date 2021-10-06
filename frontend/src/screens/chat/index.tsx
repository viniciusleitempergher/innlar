import React, { useState } from 'react';

import { useEffect } from "react";
import { Text, View } from "react-native";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Loading } from '../../components/loading';
import { TextArea } from '../../components/textArea';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { socket } from "../../services/chat";
import { MessageType } from '../../types/message';
import { styles } from './styles';


export function Chat({ route }: any) {
    const [messages, setMessages] = useState([] as Array<MessageType>);
    const [loading, setLoading] = useState(true);

    const { user } = useAuth();

    const receiverId = route.params.userId

    useEffect(() => {
        (async () => {
            try {
                const response = await api.post("/users/messages", {
                    userId: receiverId
                })

                setMessages(response.data.messages)
                setLoading(false);
            } catch (e) {
                throw e;
            }
        })();

        socket.auth = { userId: user.id };
        socket.connect();

        socket.on("new message", (message: MessageType) => {
            setMessages((prevMessages: Array<MessageType>) => [...prevMessages, message]);
        });
    }, [])

    useEffect(() => {
        console.log(messages);
    }, [messages])

    function getMessageDate(timestamp: string): string {
        let date: any = new Date(timestamp);

        let difference = new Date() as any - date;

        if (difference < 1000)
            return "agora"
        if (difference < 60000)
            return (difference / 1000 + " segundos atrás")
        if (difference < 60000 * 60)
            return ((difference / 1000) / 60 + " minutos atrás")
        return (`${date.getDate()}.${date.getMonth()}.${date.getYear()} ${date.getHours()}:${date.getMinutes()}`)
    }

    function handleSendMessage() {
        socket.emit("send message", receiverId)
    }

    return (
        <>
            {
                loading
                    ?
                    <Loading />
                    :
                    <View style={styles.container}>
                        <FlatList
                            data={messages}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <View>
                                    <Text>{item.sender.name}</Text>
                                    <Text>{item.text}</Text>
                                    <Text>{getMessageDate(item.timestamp)}</Text>
                                </View>
                            )}
                            ItemSeparatorComponent={() => <View style={{}} />}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={styles.list}
                            showsVerticalScrollIndicator={false}
                        />

                        <View style={styles.sendArea}>
                            <TextArea style={styles.sendInput} />
                            <TouchableOpacity onPress={handleSendMessage}>
                                <Text>
                                    Send
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }
        </>
    );
}