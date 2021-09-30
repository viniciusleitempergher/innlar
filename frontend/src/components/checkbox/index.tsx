import React from "react";

import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  checked: boolean
}

export const Checkbox = ({ checked, ...rest }: Props) => {
  const styleChecked = checked ? { backgroundColor: "#2E3510" } : { borderColor: "black", height: 30, width: 30, borderWidth: 0.5 };

  return (
    <TouchableOpacity style={[styles.checkbox, styleChecked]} activeOpacity={0.2} {...rest}>
      {checked && <AntDesign name="checkcircleo" size={30} color="white" />}
    </TouchableOpacity>
  );
}