import React from 'react';

import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';

import { styles } from './styles';

export function PropertyRegisterStepTwo () {
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
    <View style={styles.container}>
      <Form title="Registre sua Propriedade">
      <View style={[styles.nameField, styles.field]}>
          <Text style={styles.steps}>2º Passo</Text>
          <Text style={styles.description}>Informe o Endereço:</Text>
        </View>
      <View>
        <Text style={styles.smallDescription}>Estado:</Text>
        <TextArea style={styles.inputAddress} />
      </View>
      <View>
        <Text style={styles.smallDescription}>CEP:</Text>
        <TextArea style={styles.inputAddress} />
      </View>
      <View>
        <Text style={styles.smallDescription}>Cidade:</Text>
        <TextArea style={styles.inputAddress} />
      </View>
      <View>
        <Text style={styles.smallDescription}>Bairro:</Text>
        <TextArea style={styles.inputAddress} />
      </View>
      <View>
        <Text style={styles.smallDescription}>Rua:</Text>
        <TextArea style={styles.inputAddress} />
      </View>
      <View>
        <Text style={styles.smallDescription}>Nº da propriedade:</Text>
        <TextArea keyboardType='numeric' style={styles.inputAddress} />
      </View>
      
      
      <View style={styles.line}/>
      <View style={styles.buttons}>
          <Button style={styles.button} title="Voltar" />
          <Button style={styles.button} title="Continuar" />
        </View>
      <View style={styles.balls}>
        <View style={styles.blueBall}/>
        <View style={styles.blueBall}/>
        <View style={styles.ball}/>
        <View style={styles.ball}/>
      </View>
      </Form>
    </View> 
    </KeyboardAvoidingView>
    );
}