import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Background } from "./src/components/background";

import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
  Rajdhani_400Regular,
} from "@expo-google-fonts/rajdhani";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import { MessagesProvider } from "./src/contexts/messages";
import { AuthProvider } from "./src/contexts/auth";
import { PropertyFormDataProvider } from './src/contexts/propertyFormData';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Rajdhani_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <MessagesProvider>
          <PropertyFormDataProvider>
            <Routes />
          </PropertyFormDataProvider>
        </MessagesProvider>
      </AuthProvider>
    </Background>
  );
}
