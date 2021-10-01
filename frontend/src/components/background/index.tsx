import React, { ReactNode } from 'react';

import { ImageBackground, StyleSheet, View } from 'react-native';

import { styles } from './styles';


type Props = {
  children: ReactNode
}

export function Background({ children }: Props) {
  console.log(backgroundImg);

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}