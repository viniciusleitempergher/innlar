import React, { useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';

import { styles } from './styles';

import { stepTwoParams } from '../propertyRegister'

type Props = {
  next(params: stepTwoParams): void
}

export function PropertyRegisterStepOne({ next }: Props) {

  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("")

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <Form title="Registre sua Propriedade">
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.steps}>1º Passo</Text>
            <Text style={styles.description}>Comece definindo o nome da sua propriedade:</Text>
            <TextArea placeholder="Nome da Propriedade" onChangeText={setNome} />
          </View>
          <View style={styles.line} />
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.description}>Crie uma Descrição</Text>
            <Text style={styles.smallDescription}>Adicione uma pequena descrição sobre sua propriedade (*opcional)</Text>
            <TextArea style={styles.inputDescription} placeholder="Descrição" numberOfLines={7} multiline onChangeText={setDesc} />
          </View>
          <View style={styles.line} />
          <View style={styles.nameField}>
            <Button title="Continuar" onPress={() => { next({ nome, descricao: desc }) }} />
          </View>
          <View style={styles.balls}>
            <View style={styles.blueBall} />
            <View style={styles.ball} />
            <View style={styles.ball} />
            <View style={styles.ball} />
          </View>
        </Form>

      </View>
    </KeyboardAvoidingView>
  );
}