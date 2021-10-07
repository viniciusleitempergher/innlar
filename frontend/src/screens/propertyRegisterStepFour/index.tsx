import React, { useState } from "react";

import { Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { Form } from "../../components/form";
import { TextArea } from "../../components/textArea";
import { Button } from "../../components/button";
import { MaterialIcons } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";

type Props = {
  back: VoidFunction;
  next: VoidFunction;
};

export function PropertyRegisterStepFour({ next, back }: Props) {
  const [valor, setValor] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <Form title="">
          <View>
            <Text style={styles.title}>Registre sua Propriedade</Text>
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
            <TextArea style={styles.inputName} onChangeText={setValor} />
          </View>
          <View style={styles.line} />
          <View style={[styles.nameField, styles.field]}>
            <Text style={styles.description}>Adicione Fotos</Text>
            <Text style={styles.smallDescription}>
              Adicione fotos da sua propriedade e seus cômodos (*obrigatório)
            </Text>
            <View style={styles.inputDescription}>
              <MaterialIcons
                style={styles.inputImageIcon}
                name="image-search"
              />
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={back} style={styles.button}>
              <Text style={styles.buttonTxt}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={next} style={styles.button}>
              <Text style={styles.buttonTxt}>Finalizar</Text>
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
