import React, { useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';


type Props = {
    back: VoidFunction,
    next: VoidFunction
  }

export function PropertyRegisterStepFour({ next, back }: Props) {

  const [valor, setValor] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <Form title="Registre sua Propriedade">
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.steps}>4º Passo</Text>
            <Text style={styles.description}>Quanto vale a sua propriedade?</Text>
            <Text style={styles.smallDescription}>Defina o valor de venda: (O valor pode ser alterado a qualquer momento no seu perfil)</Text>
            <TextArea placeholder="Valor da propriedade" onChangeText={setValor} />
          </View>
          <View style={styles.line} />
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.description}>Adicione Fotos</Text>
            <Text style={styles.smallDescription}>Adicione fotos da sua propriedade e seus cômodos (*obrigatório)</Text>
            <View style={styles.inputDescription}>
                <MaterialIcons style={styles.inputImageIcon} name="image-search"/>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.buttons}>
            <Button style={styles.button} title="Voltar" onPress={back} />
            <Button style={styles.button} title="Finalizar" onPress={next} />
          </View>
          <View style={styles.balls}>
            <View style={styles.blueBall} />
            <View style={styles.blueBall} />
            <View style={styles.blueBall} />
            <View style={styles.blueBall} />
          </View>
        </Form>

      </View>
    </KeyboardAvoidingView>
  );
}