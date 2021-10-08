import React from "react";

import { useState } from 'react';

import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Alert,
} from "react-native";
import { Form } from "../../components/form";
import { TextArea } from "../../components/textArea";

import { TouchableOpacity } from "react-native-gesture-handler";

import { api } from '../../services/api';
import { useAuth } from '../../contexts/auth';

import { styles } from "./styles";
import { Loading } from "../../components/loading";

export function Register() {

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [validPassword, setValidPassword] = useState(true);

  const { signIn } = useAuth();

  async function handleSignUp() {
    if (confirmPass !== password) {
      Alert.alert("Não é possível cadastrar, senhas diferentes!");
      setValidPassword(false);
    }

    setLoading(true);

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
        phoneNumber,
      })

      if (response.status == 201) {
        await signIn(email, password);
      }
    } catch (e: any) {
      if (e.status == 409) {
        Alert.alert("Email já cadastrado!")
      }
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return (
    loading
      ?
      <Loading />
      :
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground
          source={require("../../assets/background.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <Form title="CADASTRO">
              <View style={[styles.nameField, styles.field]}>
                <TextArea placeholder="Nome Completo" onChangeText={setName} />
              </View>
              <View style={styles.field}>
                <TextArea placeholder="E-mail" onChangeText={setEmail} />
              </View>
              <View style={styles.field}>
                <TextArea
                  placeholder="Senha"
                  textContentType="password"
                  secureTextEntry={true}
                  onChangeText={setPassword}
                  isValid={validPassword}
                />
              </View>
              <View style={styles.field}>
                <TextArea
                  placeholder="Confirme sua senha"
                  textContentType="password"
                  secureTextEntry={true}
                  onChangeText={setConfirmPass}
                  isValid={validPassword}
                />
              </View>
              <View style={styles.field}>
                <TextArea
                  placeholder="Número de celular"
                  textContentType="telephoneNumber"
                  keyboardType="numeric"
                  onChangeText={setPhoneNumber}
                />
              </View>
              <View style={styles.nameField}>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                  <Text style={styles.buttonTxt}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </Form>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
  );
}
