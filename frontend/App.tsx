import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/background';

// import { Login } from './src/screens/login';
import { Login } from './src/screens/login';

import { Rajdhani_500Medium, Rajdhani_700Bold, Rajdhani_400Regular } from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Register } from './src/screens/register';
import { PropertyRegisterStepTwo } from './src/screens/propertyRegisterStepTwo';
import { PropertyRegisterStepThree } from './src/screens/propertyRegisterStepThree';
import { Checkbox } from './src/components/checkbox';
import { PropertyRegister } from './src/screens/propertyRegister';
import { Home } from './src/screens/home';
import { PropertyInfo } from './src/screens/propertyInfo';
import { InicialPage } from './src/screens/inicialPage';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';

import { PropertyEdit } from './src/screens/propertyEdit/Index';
import { Profile } from './src/screens/profile';
import { Chat } from './src/screens/chat';
import { Conversations } from './src/screens/conversations';


export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Rajdhani_400Regular

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
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}