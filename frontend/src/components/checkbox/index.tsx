import React from "react";

import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  checked: boolean
}

export const Checkbox = ({ checked, ...rest }: Props) => {
  const styleChecked = checked ? { backgroundColor: "#517275" } : { borderColor: "white", height: 36, width: 36, borderWidth: 2 };

  return (
    <TouchableOpacity style={[styles.checkbox, styleChecked]} activeOpacity={0.2} {...rest}>
      {checked && <AntDesign name="checkcircleo" size={36} color="white" />}
    </TouchableOpacity>
  );
}