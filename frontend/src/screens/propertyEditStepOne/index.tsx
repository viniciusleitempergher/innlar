import React, { useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';

import { stepTwoParams } from '../propertyRegister'

type Props = {
  next(params: stepTwoParams): void
}

export function PropertyEditStepOne({ next }: Props) {

  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("")

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <Form title="">
          <View>
            <Text style={styles.title}>Edite sua Propriedade</Text>
          </View>
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.steps}>1º Passo</Text>
            <Text style={styles.description}>Comece definindo o nome da sua propriedade abaixo:</Text>
            <TextArea style={styles.inputName} onChangeText={setNome} />
          </View>
          <View style={styles.line} />
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.description}>Crie uma Descrição</Text>
            <Text style={styles.smallDescription}>Adicione uma pequena descrição sobre sua propriedade (*opcional)</Text>
            <TextArea style={styles.inputDescription} placeholder="Descrição" numberOfLines={7} multiline onChangeText={setDesc} />
          </View>
          <View style={styles.line} />
          <TouchableOpacity onPress={() => { next({ nome, descricao: desc }) }} style={styles.button}>
              <Text style={styles.buttonTxt}>Continuar</Text>
          </TouchableOpacity>
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