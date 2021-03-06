import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { RefObject, useRef, useState } from "react";

import { useEffect } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  ImageBackground,
} from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Loading } from "../../components/loading";
import { TextArea } from "../../components/textArea";
import { useAuth } from "../../contexts/auth";
import { useMessages } from "../../contexts/messages";
import { api } from "../../services/api";
import { socket } from "../../services/chat";
import { MessageType } from "../../types/message";
import { styles } from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import { UserType } from "../../types/user";

export function Chat({ route }: any) {
  const flatListRef = useRef<any>();

  const { loading, chats, setChats } = useMessages();

  const [thisLoading, setThisLoading] = useState(true);

  const [messages, setMessages] = useState([] as Array<MessageType>);

  const [inputText, setInputText] = useState("");

  const { user } = useAuth();

  const receiverId = route.params.userId;
  const chatFromParam = route.params.chat;

  const [receiver, setReceiver] = useState({} as UserType);

  useEffect(() => {
    (async () => {
      try {

        let response = await api.get("/users", {
          params: {
            id: receiverId
          }
        });

        setReceiver(response.data);
      } catch (e) {
        throw e;
      } finally {
        setThisLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    for (let chat of chats) {
      let flag = false;

      let ids: Array<string> = [];
      chat.users.map((value) => {
        ids.push(value.id);
      })

      if (!ids.includes(chatFromParam.users[0].id)) {
        flag = true;
      } else if (!ids.includes(chatFromParam.users[1].id)) {
        flag = true;
      }

      if (!flag) {
        setMessages(chat.messages);
        break;
      }
    }
  }, [chats]);

  function getMessageDate(timestamp: string): string {
    let date: any = new Date(timestamp);

    return `${date.getHours()}:${date.getMinutes()}`;
  }

  async function handleSendMessage() {
    const messageResponse = await api.post("/users/send-message", {
      message: inputText,
      userId: receiverId,
    });

    const message = messageResponse.data.message;

    setMessages((prevMessages: Array<MessageType>) => [
      ...prevMessages,
      message,
    ]);

    let chatsCopy = chats.slice();
    chatsCopy.forEach((chat) => {
      if (chat.users.filter((user) => user.id == receiverId)) {
        chat.messages.push(message);
      }
    });

    setChats(chatsCopy);

    socket.emit("send message", message, receiverId);

    setInputText("");
  }

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <>
      {loading || thisLoading ? (
        <Loading />
      ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.container}>
              <View style={styles.user}>
                <AntDesign style={styles.arrow}
                  name="arrowleft"
                  size={30}
                  color="black"
                  onPress={handleGoBack}
                />

                <EvilIcons style={styles.profileIcon} name="user" color="black" />
                <Text style={styles.nameUser}>{receiver.name}</Text>
              </View>
              <FlatList
                ref={flatListRef}
                onContentSizeChange={() => flatListRef.current.scrollToEnd()}
                onLayout={() => flatListRef.current.scrollToEnd()}
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <>
                    {item.sender.id !== user.id ? (
                      <View style={styles.balloon}>
                        <Text style={styles.userName}>{item.sender.name}</Text>
                        <Text style={styles.message}>{item.text}</Text>
                        <Text style={styles.date}>
                          {getMessageDate(item.timestamp)}
                        </Text>
                      </View>
                    ) : (
                        <View style={[styles.balloon, { alignSelf: "flex-end" }]}>
                          <Text style={[styles.userName, { textAlign: "right" }]}>
                            Voc??
                      </Text>
                          <Text style={[styles.message, { textAlign: "right" }]}>
                            {item.text}
                          </Text>
                          <Text style={styles.date}>
                            {getMessageDate(item.timestamp)}
                          </Text>
                        </View>
                      )}
                  </>
                )}
                ItemSeparatorComponent={() => <View style={{}} />}
                contentContainerStyle={{ paddingBottom: 69 }}
                style={styles.list}
                showsVerticalScrollIndicator={false}
              />

              <View style={styles.sendArea}>
                <TextArea
                  style={styles.sendInput}
                  onChangeText={setInputText}
                  value={inputText}
                />
                <TouchableOpacity onPress={handleSendMessage}>
                  <MaterialCommunityIcons
                    name="send-circle"
                    size={45}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        )}
    </>
  );
}
