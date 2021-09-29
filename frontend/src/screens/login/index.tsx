import React, { useState } from 'react';

import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/button';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';

import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';

import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { api } from '../services/api';
import { useAuth } from '../../hooks/auth';

export function Login() {

  const { signIn, loading } = useAuth();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    await signIn(login, password);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons name="account-group" size={90} color="white" />
        <Form title="LOGIN">
          <View style={styles.emailInput}>
            <TextArea placeholder="Email" onChangeText={setLogin} />
          </View>

          <View style={styles.passwordInput}>
            <TextArea  placeholder="Senha" textContentType="password" secureTextEntry={true} onChangeText={setPassword} />
          </View>

          <View style={styles.loginButton}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonTxt}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginButton}>
            <TouchableOpacity style={styles.googleButton}>
              <AntDesign style={styles.googleIcon} name="google"/>
              <Text style={styles.googleTxt}>Entrar com Google</Text>
          </TouchableOpacity>

          </View>
        </Form>
        <View style={styles.hasntAccount}>
          <Text style={styles.hasntAccountTxt}>Não possui uma conta?</Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTxt}>Cadastre-se</Text>
          </TouchableOpacity>

        </View>
      </View>
    </KeyboardAvoidingView>
  );
}