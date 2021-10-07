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

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Loading } from "../../components/loading";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/background";

export function Login() {
  const { signIn, loading } = useAuth();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [invalidUser, setInvalidUser] = useState(false);

  async function handleLogin() {
    const error = await signIn(login, password);

    if (error) {
      if (error == 401) {
        setInvalidUser(true);
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {loading ? (
        <Loading />
      ) : (
        <ImageBackground
          source={require("../../assets/background.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
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
                <TouchableOpacity style={styles.googleButton}>
                  <AntDesign style={styles.googleIcon} name="google" />
                  <Text style={styles.googleTxt}>Entrar com Google</Text>
                </TouchableOpacity>
              </View>
            </Form>
          </View>
          <View style={styles.hasntAccount}>
            <Text style={styles.hasntAccountTxt}>Não possui uma conta?</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTxt}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </KeyboardAvoidingView>
  );
}
