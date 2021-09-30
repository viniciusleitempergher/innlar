import React from 'react';

import { TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
  isValid?: boolean,
}

export function TextArea({ isValid = true, ...rest }: Props) {
  return (
    <TextInput style={[styles.container, (!isValid) && styles.invalidInput]} placeholderTextColor="#FFFFFF" {...rest}>

    </TextInput>
  );
}