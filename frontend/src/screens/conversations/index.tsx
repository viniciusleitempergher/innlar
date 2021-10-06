import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';

import { ImageBackground, KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Loading } from '../../components/loading';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { ChatType } from '../../types/chat';
import { MessageType } from '../../types/message';
import { UserType } from '../../types/user';
import { styles } from './styles';

export function Conversations({ navigation }: any) {
    const [chats, setChats] = useState();
    const [loading, setLoading] = useState(true);

    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const chatsResponse = await api.get("/users/my-chats");

                setChats(chatsResponse.data.chats);

                console.log(chats);
                setLoading(false)
            } catch (e) {
                throw e;
            }
        })();
    }, [])

    function handleGoBack() {
        navigation.goBack();
    }

    function handleChat(users: Array<UserType>) {
        let userId = '';
        users.forEach((userOfList) => {
            if (userOfList.id !== user.id)
                userId = userOfList.id;
        });
        navigation.navigate({
            name: 'chat',
            params: { userId }
        });
    }

    function getUserName(users: Array<UserType>): string {
        let userName = '';
        users.forEach((userOfList) => {
            if (userOfList.id !== user.id)
                userName = userOfList.name;
        });
        return userName;
    }

    function getLastMessage(messages: Array<MessageType>): string {
        let message = messages[messages.length - 1]
        let messageText = ""

        if (message.sender.id == user.id) {
            messageText += "Você: ";
        } else {
            messageText += message.sender.name + ": ";
        }

        messageText += message.text;

        return messageText;
    }

    return (
        <>
            {
                loading ?
                    <Loading />
                    :
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.container}
                    >
                        <ImageBackground source={require("../../assets/whiteBackground.jpg")} style={{ width: "100%", height: "100%" }}>
                            <View style={styles.container}>
                                <View style={styles.header}>
                                    <View style={styles.iconTitle}>
                                        <AntDesign name="arrowleft" size={30} color="black" onPress={handleGoBack} />
                                        <Text style={styles.title}>Conversas</Text>
                                    </View>
                                </View>

                                <FlatList
                                    data={chats}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => {
                                            handleChat(item.users)
                                        }}>
                                            <View style={styles.chat}>
                                                <FontAwesome name="user-circle-o" size={60} color="black" />
                                                <View style={styles.texts}>
                                                    <Text style={styles.name}>{getUserName(item.users)}</Text>
                                                    <Text style={styles.lastMessage}>{getLastMessage(item.messages)}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    ItemSeparatorComponent={() => <View style={styles.line} />}
                                    contentContainerStyle={{ paddingBottom: 69 }}
                                    style={styles.list}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                        </ImageBackground>
                    </KeyboardAvoidingView>
            }
        </>
    )
}