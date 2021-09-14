import React from 'react';

import { Text, View } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';

import { styles } from './styles';

export function Register() {
  return (
    <View style={styles.container}>
      <Form title="Cadastro">
        <View style={[styles.nameField, styles.field]}>
          <Text style={styles.inputTitle}>Nome Completo:</Text>
          <TextArea placeholder="Nome" />
        </View>
        <View style={styles.field}>
          <Text style={styles.inputTitle}>Email:</Text>
          <TextArea placeholder="Email" />
        </View>
      </Form>
    </View>
  );
}