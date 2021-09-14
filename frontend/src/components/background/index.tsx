import React, { ReactNode } from 'react';

import { ImageBackground, StyleSheet, View } from 'react-native';

import { styles } from './styles';
import backgroundImg from '../../assets/background.jpg';

type Props = {
  children: ReactNode
}

export function Background({ children }: Props) {
  return (
    <ImageBackground source={backgroundImg} style={styles.container}>
      {children}
    </ImageBackground>
  );
}