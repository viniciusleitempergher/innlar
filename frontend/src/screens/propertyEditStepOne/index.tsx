import React, { useState } from "react";

import { Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { Form } from "../../components/form";
import { TextArea } from "../../components/textArea";
import { Button } from "../../components/button";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";
import { usePropertyFormData } from "../../contexts/propertyFormData";

export function PropertyEditStepOne({ navigation }: any) {

  const { name, description, setName, setDescription } = usePropertyFormData();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <Form title="">
          <View>
            <Text style={styles.title}>Edite sua Propriedade</Text>
          </View>
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.steps}>1º Passo</Text>
            <Text style={styles.description}>
              Comece definindo o nome da sua propriedade abaixo:
            </Text>
            <TextArea style={styles.inputName} onChangeText={setName} value={name} />
          </View>
          <View style={styles.line} />
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.description}>Crie uma Descrição</Text>
            <Text style={styles.smallDescription}>
              Adicione uma pequena descrição sobre sua propriedade (*opcional)
            </Text>
            <TextArea
              style={styles.inputDescription}
              placeholder="Descrição"
              numberOfLines={7}
              multiline
              onChangeText={setDescription}
              value={description}
            />
          </View>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("propertyRegisterStepTwo")
            }}
            style={styles.button}
          >
            <Text style={styles.buttonTxt}>Continuar</Text>
          </TouchableOpacity>
          <View style={styles.balls}>
            <View style={styles.blueBall} />
            <View style={styles.ball} />
            <View style={styles.ball} />
            <View style={styles.ball} />
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
}
