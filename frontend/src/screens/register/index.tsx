import React from 'react';

import { Text, View, KeyboardAvoidingView, Platform, ImageBackground} from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';

export function Register() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      
    <ImageBackground source={require('../../assets/background.jpg')} style={{width: '100%', height: '100%'}} > 
    <View style={styles.container}>
      <Form title="CADASTRO">
        <View style={[styles.nameField, styles.field]}>
          <TextArea placeholder="Nome Completo" />
        </View>
        <View style={styles.field}>
          <TextArea placeholder="E-mail" />
        </View>
        <View style={styles.field}>
          <TextArea placeholder="Senha" textContentType="password" secureTextEntry={true} />
        </View>
        <View style={styles.field}>
          <TextArea placeholder="Confirme sua senha" textContentType="password" secureTextEntry={true} />
        </View>
        <View style={styles.field}>
          <TextArea placeholder="Número de celular" textContentType="telephoneNumber" keyboardType='numeric' />
        </View>
        <View style={styles.nameField}>
        <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTxt}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </Form>

    </View>
    
    </ImageBackground> 
    </KeyboardAvoidingView>
  );
}