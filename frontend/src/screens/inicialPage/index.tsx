import React, { useState } from 'react';

import { KeyboardAvoidingView, Platform, Text, View, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function InicialPage() {

 
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

    <View style={styles.container}> 
        <ImageBackground source={require('../../assets/incialPageBackground.png')} style={{width: '100%', height: '100%'}} > 
        <Image
            source={require('../../assets/logo.png')}
            style={styles.innlarIcon}/>
            <View style={styles.viewButton}>
                <Text style={styles.findYourPlaceTxt}> Encontre seu lugar ideal! </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>INICIAR</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground> 
    </View>
    </KeyboardAvoidingView>
);
}