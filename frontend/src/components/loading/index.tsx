import React from 'react';
import { ActivityIndicator, View } from "react-native";
import { colors } from "../../global/styles/colors";
import { styles } from './style';

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color="#B9A78D"
            />
        </View>
    )
}