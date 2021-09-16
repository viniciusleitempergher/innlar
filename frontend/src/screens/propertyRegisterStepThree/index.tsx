import React, { useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { Checkbox } from '../../components/checkbox'
import { styles } from './styles';


export function PropertyRegisterStepThree() {

  const [checked, setChecked] = useState(false);
  //const [churrasqueira, setChurasqueira] = useState(false);
  //const [areaFesta, setAreaFesta] = useState(false);


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <Form title="Registre sua Propriedade">
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.steps}>3º Passo</Text>
            <Text style={styles.description}>Características Físicas:</Text>
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.smallDescription}>Área do Terreno (m²):</Text>
            <TextArea keyboardType='numeric' style={styles.inputNumber} />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.smallDescription}>Nº de Quartos:</Text>
            <TextArea keyboardType='numeric' style={styles.inputNumber} />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.smallDescription}>Nº de Banheiros:</Text>
            <TextArea keyboardType='numeric' style={styles.inputNumber} />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.smallDescription}>Nº de Salas:</Text>
            <TextArea keyboardType='numeric' style={styles.inputNumber} />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.smallDescription}>Nº de Cozinhas:</Text>
            <TextArea keyboardType='numeric' style={styles.inputNumber} />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.smallDescription}>Possui área de festa?</Text>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Checkbox checked={checked} onPress={() => setChecked(!checked)} />
            </View>
          </View>
          




          <View style={styles.line} />
          <View style={styles.buttons}>
            <Button style={styles.button} title="Voltar" />
            <Button style={styles.button} title="Continuar" />
          </View>
          <View style={styles.balls}>
            <View style={styles.blueBall} />
            <View style={styles.blueBall} />
            <View style={styles.blueBall} />
            <View style={styles.ball} />
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
}