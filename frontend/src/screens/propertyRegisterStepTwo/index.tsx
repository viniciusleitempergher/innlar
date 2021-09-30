import React, { useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { stepThreeParams } from '../propertyRegister';

type Props = {
  back: VoidFunction,
  next(params: stepThreeParams): void
}

export function PropertyRegisterStepTwo({ next, back }: Props) {

  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState(0);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <Form title="">
        <View>
            <Text style={styles.title}>Registre sua Propriedade</Text>
          </View>
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.steps}>2º Passo</Text>
            <Text style={styles.description}>Informe o Endereço:</Text>
          </View>
          <View>
            <Text style={styles.smallDescription}>Estado:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setState} />
          </View>
          <View>
            <Text style={styles.smallDescription}>CEP:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setCep} />
          </View>
          <View>
            <Text style={styles.smallDescription}>Cidade:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setCity} />
          </View>
          <View>
            <Text style={styles.smallDescription}>Bairro:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setDistrict} />
          </View>
          <View>
            <Text style={styles.smallDescription}>Rua:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setStreet} />
          </View>
          <View>
            <Text style={styles.smallDescription}>Nº da propriedade:</Text>
            <TextArea keyboardType='numeric' style={styles.inputAddress} onChangeText={(txt) => { setNumber(+txt) }} />
          </View>
          
          <View style={styles.buttons}>
          <TouchableOpacity onPress={back} style={styles.button}>
              <Text style={styles.buttonTxt}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { next({ cep, city, district, number, state, street }) }} style={styles.button}>
              <Text style={styles.buttonTxt}>Continuar</Text>
          </TouchableOpacity>
        
          </View>

          <View style={styles.balls}>
            <View style={styles.blueBall} />
            <View style={styles.blueBall} />
            <View style={styles.ball} />
            <View style={styles.ball} />
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
}