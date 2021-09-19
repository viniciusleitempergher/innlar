import React from 'react';

import { Text, TextInputProps, View } from 'react-native';
import { Checkbox } from '../checkbox';
import { TextArea } from '../textArea';

import { styles } from './styles';

type Props = TextInputProps & {
  title: string,
}

export function Question({ title, ...rest }: Props) {
  return (
    <View style={styles.viewInput}>
      <Text style={styles.smallDescription}>{title}</Text>
      <TextArea keyboardType='numeric' style={styles.inputNumber} {...rest} />
    </View>
  );
}