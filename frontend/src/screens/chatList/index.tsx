import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { TextArea } from "../../components/textArea";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export function ChatList() {
return (
<KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
>
    <ImageBackground source={require("../../assets/whiteBackground.jpg")} style={{ width: "100%", height: "100%" }}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconTitle}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                    <Text style={styles.title}>Conversas</Text>
                </View>
            </View>

            <View style={styles.chat}>
                <FontAwesome name="user-circle-o" size={60} color="black" />
                <View style={styles.texts}>
                    <Text style={styles.name}>José Augusto</Text>
                    <Text style={styles.lastMessage}>Você: Ok, obrigado!</Text>
                </View> 
            </View>

            <View style={styles.line}/>

            <View style={styles.chat}>
                <FontAwesome name="user-circle-o" size={60} color="black" />
                <View style={styles.texts}>
                    <Text style={styles.name}>João de Oliveira</Text>
                    <Text style={styles.lastMessage}>João: Gostei! Qual seria o valor?</Text>
                </View>
            </View>

            <View style={styles.line}/>

            <View style={styles.chat}>
                <FontAwesome name="user-circle-o" size={60} color="black" />
                <View style={styles.texts}>
                    <Text style={styles.name}>Maria Antônia da Silva</Text>
                    <Text style={styles.lastMessage}>Você: Agradeço o contato Maria! Já te pass...</Text>
                </View>
            </View>
        
            <View style={styles.line}/>

            <View style={styles.chat}>
                <FontAwesome name="user-circle-o" size={60} color="black" />
                <View style={styles.texts}>
                    <Text style={styles.name}>Carlos Alberto Perez</Text>
                    <Text style={styles.lastMessage}>Carlos: Olá, tudo bem?</Text>
                </View>
            </View>

            <View style={styles.line}/>

            <View style={styles.chat}>
                <FontAwesome name="user-circle-o" size={60} color="black" />
                <View style={styles.texts}>
                    <Text style={styles.name}>Josefina Andrade</Text>
                    <Text style={styles.lastMessage}>Josefina: Não quero mais, obrigada</Text>
                </View>
            </View>

            <View style={styles.line}/>
     

        </View>
    </ImageBackground>
</KeyboardAvoidingView>
);
}
