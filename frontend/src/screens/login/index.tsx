import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  ImageBackground,
  Alert,
} from "react-native";
import { Form } from "../../components/form";
import { TextArea } from "../../components/textArea";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../../services/api";
import { Loading } from "../../components/loading";
import { useAuth } from "../../contexts/auth";

export function Login({ navigation }: any) {
  const { signIn, loading, googleSignin } = useAuth();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [invalidUser, setInvalidUser] = useState(false);

  async function handleLogin() {
    const error = await signIn(login, password);

    if (error) {
      if (error == 401) {
        setInvalidUser(true);
        Alert.alert("Email ou senha inválidos!");
      }
    }
  }

  function handleSignUp() {
    navigation.navigate("register")
  }

  async function handleGoogleSignin() {
    googleSignin();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      {loading ? (
        <Loading />
      ) : (
        <ImageBackground
          source={require("../../assets/background.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <ScrollView>
            <View style={styles.container}>
              <MaterialCommunityIcons
                style={styles.peopleIcon}
                name="account-group"
              />

              <Form title="LOGIN">
                <View style={styles.emailInput}>
                  <TextArea
                    placeholder="Email"
                    onChangeText={setLogin}
                    isValid={!invalidUser}
                  />
                </View>

                <View style={styles.passwordInput}>
                  <TextArea
                    placeholder="Senha"
                    textContentType="password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    isValid={!invalidUser}
                  />
                </View>

                <View style={styles.loginButton}>
                  <TouchableOpacity onPress={handleLogin} style={[styles.button]}>
                    <Text style={styles.buttonTxt}>Login</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.loginButton}>
                  <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignin}>
                    <AntDesign style={styles.googleIcon} name="google" />
                    <Text style={styles.googleTxt}>Entrar com Google</Text>
                  </TouchableOpacity>
                </View>
              </Form>
            </View>

            <View style={styles.hasntAccount}>
              <Text style={styles.hasntAccountTxt}>Não possui uma conta?</Text>
              <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonTxt}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      )}
    </KeyboardAvoidingView>
  );
}
