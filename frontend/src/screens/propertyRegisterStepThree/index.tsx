import React, { useEffect, useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { Checkbox } from '../../components/checkbox'
import { styles } from './styles';
import { Question } from '../../components/question';
import { CheckBoxQuestion } from '../../components/checkboxQuestion';

type Props = {
  back: VoidFunction,
  next: VoidFunction
}

export function PropertyRegisterStepThree({ back, next }: Props) {

  const [area, setArea] = useState("");
  const [quartos, setQuartos] = useState("");
  const [banheiros, setBanheiros] = useState("");
  const [salas, setSalas] = useState("");
  const [cozinhas, setCozinhas] = useState("");

  const [areaFesta, setAreaFesta] = useState(false);
  const [churrasqueira, setChurasqueira] = useState(false);
  const [piscina, setPiscina] = useState(false);
  const [garagem, setGaragem] = useState(false);

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
          <Question title="Área do Terreno (m²):" onChangeText={setArea} />
          <Question title="Nº de Quartos:" onChangeText={setQuartos} />
          <Question title="Nº de Banheiros:" onChangeText={setBanheiros} />
          <Question title="Nº de Salas:" onChangeText={setSalas} />
          <Question title="Nº de Cozinhas:" onChangeText={setCozinhas} />
          <CheckBoxQuestion title="Possui área de festa?" checked={areaFesta} onPress={() => { setAreaFesta(!areaFesta) }} />
          <CheckBoxQuestion title="Possui churrasqueira?" checked={churrasqueira} onPress={() => { setChurasqueira(!churrasqueira) }} />
          <CheckBoxQuestion title="Possui piscina?" checked={piscina} onPress={() => { setPiscina(!piscina) }} />
          <CheckBoxQuestion title="Possui garagem?" checked={garagem} onPress={() => { setGaragem(!garagem) }} />

          <View style={styles.line} />
          <View style={styles.buttons}>
            <Button style={styles.button} title="Voltar" onPress={back} />
            <Button style={styles.button} title="Continuar" onPress={next} />
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