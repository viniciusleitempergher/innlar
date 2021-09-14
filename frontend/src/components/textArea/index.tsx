import React from 'react';

import { TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

export function TextArea({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.container} {...rest}>

    </TextInput>
  );
}