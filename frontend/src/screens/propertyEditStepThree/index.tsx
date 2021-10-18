import React, { useEffect, useState } from "react";

import { Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { Form } from "../../components/form";
import { TextArea } from "../../components/textArea";
import { Button } from "../../components/button";
import { Checkbox } from "../../components/checkbox";
import { styles } from "./styles";
import { Question } from "../../components/question";
import { CheckBoxQuestion } from "../../components/checkboxQuestion";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { usePropertyFormData } from "../../contexts/propertyFormData";

export function PropertyEditStepThree({ navigation }: any) {

  const { hasPartyArea, setHasPartyArea, hasGrill, setHasGrill,
    hasPool, setHasPool, hasGarage, setHasGarage,
    squareMeters, numberRooms, numberBathRooms, numberKitchens, numberBedRooms,
    setSquareMeters, setNumberRooms, setNumberBathRooms, setNumberKitchens, setNumberBedRooms
  } = usePropertyFormData();

  return (
    <ScrollView>
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
              <Text style={styles.steps}>3º Passo</Text>
              <Text style={styles.description}>Características Físicas:</Text>
            </View>
            <Question title="Área do Terreno (m²):" onChangeText={setSquareMeters} value={squareMeters} />
            <Question title="Nº de Quartos:" onChangeText={setNumberBedRooms} value={numberBedRooms} />
            <Question title="Nº de Banheiros:" onChangeText={setNumberBathRooms} value={numberBathRooms} />
            <Question title="Nº de Salas:" onChangeText={setNumberRooms} value={numberRooms} />
            <Question title="Nº de Cozinhas:" onChangeText={setNumberKitchens} value={numberKitchens} />
            <CheckBoxQuestion
              title="Possui área de festa?"
              checked={hasPartyArea}
              onPress={() => {
                setHasPartyArea(!hasPartyArea);
              }}
            />
            <CheckBoxQuestion
              title="Possui churrasqueira?"
              checked={hasGrill}
              onPress={() => {
                setHasGrill(!hasGrill);
              }}
            />
            <CheckBoxQuestion
              title="Possui piscina?"
              checked={hasPool}
              onPress={() => {
                setHasPool(!hasPool);
              }}
            />
            <CheckBoxQuestion
              title="Possui garagem?"
              checked={hasGarage}
              onPress={() => {
                setHasGarage(!hasGarage);
              }}
            />

            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => { navigation.navigate("propertyRegisterStepTwo") }} style={styles.button}>
                <Text style={styles.buttonTxt}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { navigation.navigate("propertyRegisterStepFour") }} style={styles.button}>
                <Text style={styles.buttonTxt}>Continuar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.balls}>
              <View style={styles.blueBall} />
              <View style={styles.blueBall} />
              <View style={styles.blueBall} />
              <View style={styles.ball} />
            </View>
          </Form>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
