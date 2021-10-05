import React, { useState, Component } from "react";

import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  Modal,
  Alert,
  Pressable,
  ImageBackground,
} from "react-native";
import { Form } from "../../components/form";
import { TextArea } from "../../components/textArea";
import { Button } from "../../components/button";
import { FontAwesome } from "@expo/vector-icons";
import { ModalHome } from "../../components/modal";
import { ModalMenu } from "../../components/modalMenu";

import { styles } from "./styles";

export function Home({ navigation }: any) {
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground
          source={require("../../assets/whiteBackground.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <Form title="">
              <ModalMenu navigation={navigation} />
              <View style={styles.innlarIcon}>
                <Image
                  source={require("../../assets/logoPreta.png")}
                  style={styles.innlarIcon}
                />
              </View>
              <View style={styles.searchProperty}>
                <ModalHome />
              </View>
              <View style={[styles.property, styles.nameField, styles.field]}>
                <View style={styles.line} />
                <Image
                  source={require("../../assets/testeCasa.jpg")}
                  style={styles.propertyImage}
                />
                <Text style={styles.propertyTitle}>
                  Residencial Monte Carlo
                </Text>
                <Text style={styles.value}>Valor: R$650.000,00</Text>
                <View style={styles.info}>
                  <FontAwesome style={styles.icon} name="user" />
                  <Text style={styles.info1}>Joana Garcia</Text>
                </View>

                <Text style={styles.info2}>Ver mais informações</Text>
              </View>

              <View style={[styles.property, styles.nameField, styles.field]}>
                <View style={styles.line} />
                <Image
                  source={require("../../assets/testeCasa2.jpg")}
                  style={styles.propertyImage}
                />
                <Text style={styles.propertyTitle}>Casa Bela Vista</Text>
                <Text style={styles.value}>Valor: R$845.600,00</Text>
                <View style={styles.info}>
                  <FontAwesome style={styles.icon} name="user" />
                  <Text style={styles.info1}>Pedro Antônio</Text>
                </View>

                <Text style={styles.info2}>Ver mais informações</Text>
              </View>

              <View style={[styles.property, styles.nameField, styles.field]}>
                <View style={styles.line} />
                <Image
                  source={require("../../assets/testeCasa3.png")}
                  style={styles.propertyImage}
                />
                <Text style={styles.propertyTitle}>Apartamento Luxuoso </Text>
                <Text style={styles.value}>Valor: R$1.000.000,50</Text>
                <View style={styles.info}>
                  <FontAwesome style={styles.icon} name="user" />
                  <Text style={styles.info1}>José Vinicius</Text>
                </View>
                <Text style={styles.info2}>Ver mais informações</Text>
              </View>
            </Form>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
