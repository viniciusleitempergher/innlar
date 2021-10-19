import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

import { Image, Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  srcImage: string;
  propertyName: string;
  value: string;
  userName: string;
}

export function PropertyResult({ srcImage, propertyName, value, userName }: Props) {
  const httpUrl = { uri: srcImage };
  return (
    <View style={[styles.property, styles.nameField, styles.field]}>
      <View style={styles.line} />
      <Image
        source={httpUrl}
        style={styles.propertyImage}
      />
      <Text style={styles.propertyTitle}>
        {propertyName}
      </Text>
      <Text style={styles.value}>Valor: {value}</Text>
      <View style={styles.info}>
        <FontAwesome style={styles.icon} name="user" />
        <Text style={styles.info1}>{userName}</Text>
      </View>

      <Text style={styles.info2}>Ver mais informações</Text>
    </View>
  );
}