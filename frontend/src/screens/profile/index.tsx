import React, { useState } from "react";

import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { Form } from "../../components/form";
import { TextArea } from "../../components/textArea";
import { Button } from "../../components/button";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import apto from "../../assets/testeCasa.jpg";
import apto2 from "../../assets/testeCasa2.jpg";
import apto3 from "../../assets/testeCasa3.png";

import { Property } from "../../components/property";

export function Profile() {
  const me = true;
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.container}>
          <Form title="">
            <View style={styles.border}>
              <EvilIcons
                name="user"
                size={150}
                color="black"
              />
            </View>
            {me ? (
              <View style={styles.buttonBorder}>
                <MaterialCommunityIcons
                  name="image-edit"
                  size={30}
                  color="black"
                />
              </View>
            ) : (
              <FontAwesome5
                style={styles.button}
                name="home"
                size={35}
                color="black"
              />
            )}
            <Text style={styles.profileTitle}>José da Silva</Text>
            <View style={styles.containerInfo}>
              <Text style={styles.information}>josedasilva@gmail.com</Text>
              <Text style={styles.information}>-</Text>
              <Text style={styles.information}>(47) 98852-3369</Text>
            </View>
            <Text style={styles.title}>Propriedades</Text>

            <Property srcImage={apto} propertyName="Residencial Monte Carlo" />
            <Property srcImage={apto2} propertyName="Casa Bela Vista" />
            <Property srcImage={apto3} propertyName="Apartamento Luxuoso" />

            <View style={styles.borderTwo}>
              <Feather name="edit-3" size={45} color="white" />
            </View>
          </Form>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
