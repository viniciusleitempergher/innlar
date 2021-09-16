import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

export const Checkbox = ({ checked, onPress }: any) => {  
  const styleChecked = checked ? { backgroundColor: "#517275" } : { borderColor: "white", height: 36, width: 36, borderWidth: 2 };

  return (
    <TouchableOpacity style={[styles.checkbox, styleChecked]} onPress={onPress} activeOpacity={0.2}>
      { checked && <AntDesign name="checkcircleo" size={36} color="white" /> }
      
    </TouchableOpacity>
  );
}