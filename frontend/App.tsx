import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/background';
import { Login } from './src/screens/login';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Register } from './src/screens/register';
import { PropertyRegister } from './src/screens/propertyRegister';
import { PropertyRegisterStepTwo } from './src/screens/propertyRegisterStepTwo';
import { PropertyRegisterStepThree } from './src/screens/propertyRegisterStepThree';
import { Checkbox } from './src/components/checkbox';


export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })



  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <PropertyRegisterStepThree/>
    </Background>
  );
}