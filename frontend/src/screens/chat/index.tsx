import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { RefObject, useRef, useState } from 'react';

import { useEffect } from "react";
import { Alert, KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Loading } from '../../components/loading';
import { TextArea } from '../../components/textArea';
import { useAuth } from '../../contexts/auth';
import { useMessages } from '../../contexts/messages';
import { api } from '../../services/api';
import { socket } from "../../services/chat";
import { MessageType } from '../../types/message';
import { styles } from './styles';


export function Chat({ route }: any) {
    const flatListRef = useRef<any>();

    const { loading, chats, setChats } = useMessages();

    const [messages, setMessages] = useState([] as Array<MessageType>);

    const [inputText, setInputText] = useState("");

    const { user } = useAuth();

    const receiverId = route.params.userId

    useEffect(() => {
        for (let chat of chats) {
            if (chat.users.filter(user => user.id == receiverId)) {
                setMessages(chat.messages)
            }
        }
    }, [chats]);

    function getMessageDate(timestamp: string): string {
        let date: any = new Date(timestamp);

        return `${date.getHours()}:${date.getMinutes()}`
    }

    async function handleSendMessage() {
        const messageResponse = await api.post("/users/send-message", {
            message: inputText,
            userId: receiverId
        })

        const message = messageResponse.data.message;

        setMessages((prevMessages: Array<MessageType>) => [...prevMessages, message]);

        for (let chat of chats) {
            if (chat.users.filter(user => user.id == receiverId)) {
                chat.messages.push(message);
            }
        }

        setChats(chats);

        socket.emit("send message", message, receiverId);

        setInputText("")
    }

    const navigation = useNavigation();
    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <>
            {
                loading
                    ?
                    <Loading />
                    :
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.container}
                    >
                        <View style={styles.container}>
                            <AntDesign name="arrowleft" size={30} color="black" onPress={handleGoBack} />
                            <FlatList
                                ref={flatListRef}
                                onContentSizeChange={() => flatListRef.current.scrollToEnd()}
                                onLayout={() => flatListRef.current.scrollToEnd()}
                                data={messages}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text>{(item.sender.id !== user.id) ? item.sender.name : "Você"}</Text>
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
                                <TextArea style={styles.sendInput} onChangeText={setInputText} value={inputText} />
                                <TouchableOpacity onPress={handleSendMessage}>
                                    <Text>
                                        Send
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
            }
        </>
    );
}