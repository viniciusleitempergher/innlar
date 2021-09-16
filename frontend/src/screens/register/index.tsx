import React from 'react';

import { Text, View, KeyboardAvoidingView, Platform} from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';

import { styles } from './styles';

export function Register() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
    <View style={styles.container}>
      <Form title="Cadastro">
        <View style={[styles.nameField, styles.field]}>
          <Text style={styles.inputTitle}>Nome Completo:</Text>
          <TextArea placeholder="Nome Completo" />
        </View>
        <View style={styles.field}>
          <Text style={styles.inputTitle}>E-mail:</Text>
          <TextArea placeholder="E-mail" />
        </View>
        <View style={styles.field}>
          <Text style={styles.inputTitle}>Senha:</Text>
          <TextArea placeholder="Senha" textContentType="password" secureTextEntry={true} />
        </View>
        <View style={styles.field}>
          <Text style={styles.inputTitle}>Confirmação de senha:</Text>
          <TextArea placeholder="Confirme sua senha" textContentType="password" secureTextEntry={true} />
        </View>
        <View style={styles.field}>
          <Text style={styles.inputTitle}>Número de celular:</Text>
          <TextArea placeholder="(00) 00000-0000" textContentType="telephoneNumber" keyboardType='numeric' />
        </View>
        <View style={styles.nameField}>
          <Button title="Cadastrar" />
        </View>
      </Form>
    
    </View>
    </KeyboardAvoidingView>
  );
}