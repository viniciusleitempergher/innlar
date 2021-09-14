import React from 'react';

import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/button';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';

import { styles } from './styles';

export function Login() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <Ionicons name="people-sharp" size={24} color="black" style={styles.peopleIcon} />
        <Form title="Entrar">
          <View style={styles.emailInput}>
            <TextArea placeholder="Email" />
          </View>

          <View style={styles.passwordInput}>
            <TextArea placeholder="Senha" textContentType="password" secureTextEntry={true} />
          </View>

          <View style={styles.loginButton}>
            <Button title="Login" />
          </View>
        </Form>
        <View style={styles.hasntAccount}>
          <Text style={styles.hasntAccountTxt}>Não possui uma conta?</Text>
          <Button title="Cadastrar-se" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}