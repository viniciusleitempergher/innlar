import React, { useMemo, useState } from "react";

import { Text, View, KeyboardAvoidingView, Platform, Image } from "react-native";
import { Form } from "../../components/form";

import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";
import { usePropertyFormData } from "../../contexts/propertyFormData";
import { ImageType } from "../../types/image";

export function SelectImagesToDelete({ navigation }: any) {
  const { images } = usePropertyFormData();

  function handleSelectImagesToAdd() {
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
            <Text style={styles.description}>
              Escolha as imagens que deseja remover:
            </Text>
            <FlatList
              data={images}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <>
                  <Image source={{ uri: item.url }} />
                </>
              )}
              ItemSeparatorComponent={() => <View style={{}} />}
              contentContainerStyle={{ paddingBottom: 69 }}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => { navigation.navigate("propertyRegisterStepThree") }} style={styles.button}>
              <Text style={styles.buttonTxt}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSelectImagesToAdd} style={styles.button}>
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
