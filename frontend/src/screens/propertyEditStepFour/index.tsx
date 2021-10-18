import React, { useMemo, useState } from "react";

import { Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { Form } from "../../components/form";
import { TextArea } from "../../components/textArea";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AssetsSelector } from 'expo-images-picker'
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";
import { usePropertyFormData } from "../../contexts/propertyFormData";

export function PropertyEditStepFour({ navigation }: any) {

  const { propertyValue, setPropertyValue } = usePropertyFormData();
  function handleSelectImagesToDelete() {
    navigation.navigate("selectImagesToDelete");
  }

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
            <Text style={styles.steps}>4º Passo</Text>
            <Text style={styles.description}>
              Quanto vale a sua propriedade?
            </Text>
            <Text style={styles.smallDescription}>
              Defina o valor de venda abaixo: (O valor poderá ser alterado a
              qualquer momento no seu perfil)
            </Text>
            <TextArea style={styles.inputName} onChangeText={setPropertyValue} value={propertyValue} />
          </View>
          <View style={styles.line} />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => { navigation.navigate("propertyRegisterStepThree") }} style={styles.button}>
              <Text style={styles.buttonTxt}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSelectImagesToDelete} style={styles.button}>
              <Text style={styles.buttonTxt}>Próximo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.balls}>
            <View style={styles.blueBall} />
            <View style={styles.blueBall} />
            <View style={styles.blueBall} />
            <View style={styles.blueBall} />
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
}
