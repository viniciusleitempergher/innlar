import React, { ReactNode } from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  children: ReactNode,
  title: String,
  height?: string | number
}

export function Form({ children, title, height }: Props) {
  return (
    <View style={{...styles.container, height: height || undefined}}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}