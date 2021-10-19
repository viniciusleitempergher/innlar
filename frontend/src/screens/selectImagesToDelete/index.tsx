import React, { useMemo, useState } from "react";

import { Text, View, KeyboardAvoidingView, Platform, Image, Alert } from "react-native";
import { Form } from "../../components/form";

import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";
import { usePropertyFormData } from "../../contexts/propertyFormData";
import { Loading } from "../../components/loading";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../services/api";

export function SelectImagesToDelete({ navigation }: any) {
  const { images, setImages } = usePropertyFormData();

  const [loading, setLoading] = useState(false);

  function handleSelectImagesToAdd() {
    navigation.navigate("selectImagesToAdd");
  }

  function handleRemoveImage(imageId: string) {
    let buttons = [{
      text: 'Sim',
      onPress: () => { removeImage(imageId) },
    }, {
      text: 'Não',
      onPress: () => { }
    }];

    Alert.alert("Tem certeza que deseja excluir esta imagem?", "Esta ação não pode ser desfeita.", buttons);
  }

  async function removeImage(imageId: string) {
    setLoading(true);
    try {
      let response = await api.delete("/properties/images", {
        params: {
          image: imageId
        }
      });

      if (response.status === 200) {
        let index = images.findIndex((img) => img.id === imageId);
        setImages(images.splice(index, 1));
        Alert.alert("Imagem removida!");
      }
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return (
    <>{
      loading ? <Loading /> :
        < KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <ScrollView>
            <View style={[styles.container, { marginTop: getStatusBarHeight() + 45 }]}>
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
                        <Image source={{ uri: item.url }} style={{ width: '100%', height: 220 }} />
                        <AntDesign name="closecircle" size={35} color="black" style={{ marginTop: -15, alignSelf: "center", marginBottom: 20 }}
                          onPress={() => { handleRemoveImage(item.id) }}
                        />
                      </>
                    )}
                    ItemSeparatorComponent={() => <View style={{}} />}
                    contentContainerStyle={{ paddingBottom: 69 }}
                    style={{}}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
                <View style={styles.line} />
                <View style={styles.buttons}>
                  <TouchableOpacity onPress={handleSelectImagesToAdd} style={styles.button}>
                    <Text style={styles.buttonTxt}>Próximo</Text>
                  </TouchableOpacity>
                </View>
              </Form>
            </View>
          </ScrollView>
        </KeyboardAvoidingView >
    }
    </>);
}
