import React from 'react';

import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Text style={styles.buttonText}> {title} </Text>
    </TouchableOpacity>
  );
}