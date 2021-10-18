import React from 'react';

import { Image, ImageSourcePropType, Text, View } from "react-native";

import { styles } from './style'

type Props = {
    srcImage: string;
    propertyName: String;
}

export function Property({ srcImage, propertyName }: Props) {
    return (
        <View style={[styles.property, styles.nameField, styles.field]}>
            <View style={styles.line} />
            <Image
                source={{ uri: srcImage }}
                style={styles.propertyImage}
            />
            <Text style={styles.propertyTitle}>{propertyName}</Text>
        </View>
    )
}