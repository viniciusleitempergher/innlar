import { EvilIcons } from '@expo/vector-icons';
import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
    username: string,
    phoneNumber: string,
}

export function UserProfile({ username, phoneNumber }: Props) {
    return (
        <View style={styles.container}>
            <Text>{username}</Text>
            <Text>{phoneNumber}</Text>
        </View>
    )
}