import React from 'react';

import { Text, TouchableOpacityProps, View } from 'react-native';
import { Checkbox } from '../checkbox';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string,
  checked: boolean
}

export function CheckBoxQuestion({ title, checked, ...rest }: Props) {
  return (
    <View style={styles.viewInput}>
      <Text style={styles.smallDescription}>{title}</Text>
      <Checkbox checked={checked} {...rest} />
    </View>
  );
}