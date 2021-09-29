import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/background';
// import { Login } from './src/screens/login';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { PropertyEdit } from './src/screens/propertyEdit/Index';
// import { Register } from './src/screens/register';
// import { PropertyRegisterStepTwo } from './src/screens/propertyRegisterStepTwo';
// import { PropertyRegisterStepThree } from './src/screens/propertyRegisterStepThree';
// import { Checkbox } from './src/components/checkbox';
// import { PropertyRegister } from './src/screens/propertyRegister';
// import { Home } from './src/screens/home';
// import { PropertyInfo } from './src/screens/propertyInfo';
// import { PropertyEditStepTwo } from './src/screens/propertyEditStepTwo';
// import { PropertyEditStepThree } from './src/screens/propertyEditStepThree';


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
      <PropertyEdit/>
    </Background>
  );
}