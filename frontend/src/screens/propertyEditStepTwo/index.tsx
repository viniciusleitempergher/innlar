import React, { useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { usePropertyFormData } from '../../contexts/propertyFormData';

export function PropertyEditStepTwo({ navigation }: any) {

  const { setState, setCep, setCity, setStreet, setNumber, setDistrict,
    state, cep, city, street, number, district
  } = usePropertyFormData();

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
            <Text style={styles.steps}>2º Passo</Text>
            <Text style={styles.description}>Informe o Endereço:</Text>
          </View>
          <View>
            <Text style={styles.smallDescription}>Estado:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setState} value={state} />
          </View>
          <View>
            <Text style={styles.smallDescription}>CEP:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setCep} value={cep} />
          </View>
          <View>
            <Text style={styles.smallDescription}>Cidade:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setCity} value={city} />
          </View>
          <View>
            <Text style={styles.smallDescription}>Bairro:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setDistrict} value={district} />
          </View>
          <View>
            <Text style={styles.smallDescription}>Rua:</Text>
            <TextArea style={styles.inputAddress} onChangeText={setStreet} value={street} />
          </View>
          <View>
            <Text style={styles.smallDescription}>Nº da propriedade:</Text>
            <TextArea keyboardType='numeric' style={styles.inputAddress} onChangeText={(txt) => { setNumber(txt) }}
              value={number} />
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => { navigation.navigate("propertyRegisterStepOne") }} style={styles.button}>
              <Text style={styles.buttonTxt}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("propertyRegisterStepThree") }} style={styles.button}>
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