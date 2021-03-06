import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Form } from "../../components/form";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Property } from "../../components/property";
import { Loading } from "../../components/loading";
import { api } from "../../services/api";
import { UserType } from "../../types/user";
import { useAuth } from "../../contexts/auth";
import { PropertyType } from "../../types/property";
import { usePropertyFormData } from "../../contexts/propertyFormData";

export function Profile({ navigation, route }: any) {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [userOfProfile, setUserOfProfile] = useState({} as UserType);
  const userId = route.params.userId;

  const [properties, setProperties] = useState([] as Array<PropertyType>);

  const { setPropertyStatesToEdit } = usePropertyFormData();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    (async () => {
      try {
        let response = await api.get("/users", {
          params: {
            id: userId
          }
        });

        setUserOfProfile(response.data);

        let propertiesResponse = await api.get("/properties/get-from-user", {
          params: {
            userUuid: userId
          }
        })

        console.log(propertiesResponse.data);

        setProperties(propertiesResponse.data.properties);
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const me = user.id == userId;

  async function handleEditAvatar() {
    setLoading(true);
    try {
      let image: any = await openImagePicker();

      let data = new FormData();
      data.append("avatar", image);

      let response = await api.post("/users/avatar", data);

      if (response.status === 200) {
        Alert.alert("Avatar atualizado!");
        navigation.navigate("home");
      }
    } catch (e) {
      Alert.alert("Ocorreu um erro ao atualizar sua imagem... Talvez voc?? esteja sem conex??o!?");
    } finally {
      setLoading(false);
    }
  }
  async function openImagePicker() {
    const permissionsResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionsResult.granted === false) {
      alert("?? necess??rio conceder a permiss??o de acesso a galeria");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "Images" as any,
      aspect: [4, 3],
      quality: 1
    });

    return pickerResult;
  }


  function handleGoToProperty(id: string) {

  }

  function handleEditProperty(id: string) {
    setPropertyStatesToEdit(id, navigation);
  }

  function handleRemoveProperty(propertyId: string) {
    let buttons = [{
      text: 'Sim',
      onPress: () => { removeProperty(propertyId) },
    }, {
      text: 'N??o',
      onPress: () => { }
    }];

    Alert.alert("Tem certeza que deseja excluir esta propiedade?", "Esta a????o n??o pode ser desfeita.", buttons);
  }

  async function removeProperty(id: string) {
    setLoading(true);
    try {
      let response = await api.delete("/properties/delete", {
        params: {
          propertyId: id
        }
      });

      setLoading(false);

      if (response.status == 200) {
        navigation.navigate('home');
        Alert.alert("Propriedade removida com sucesso!");
      } else {
        Alert.alert("Houve um erro ao deletar a propiedade, tente novamente mais tarde...");
      }
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {
        loading ?
          <Loading />
          :
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
                    <TouchableOpacity onPress={handleGoBack} >
                      <AntDesign name="arrowleft" size={30} color="black" />
                    </TouchableOpacity>
                    <View style={styles.profileIconBorder}>
                      {userOfProfile.avatar == "" || userOfProfile.avatar == null ?
                        <EvilIcons
                          style={styles.profileIcon}
                          name="user"
                          color="black"
                        />
                        :
                        <Image source={{ uri: userOfProfile.avatar }} style={{ flex: 1, borderRadius: 500 }} />
                      }
                    </View>
                    {me ? (
                      <View style={styles.buttonBorder}>
                        <MaterialCommunityIcons
                          name="image-edit"
                          size={30}
                          color="black"
                          onPress={handleEditAvatar}
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
                    <View style={styles.stars}>
                      <Entypo name="star" size={24} color="black" />
                      <Entypo name="star" size={24} color="black" />
                      <Entypo name="star" size={24} color="black" />
                      <Entypo name="star" size={24} color="black" />
                      <Entypo name="star-outlined" size={24} color="black" />
                    </View>
                    <Text style={styles.profileTitle}>{userOfProfile.name}</Text>
                    <View style={styles.containerInfo}>
                      {
                        userOfProfile.phoneNumber ?
                          <>
                            <Text style={styles.information}>
                              {userOfProfile.email}
                            </Text>
                            <Text style={styles.information}>-</Text>
                            <Text style={styles.information}>{userOfProfile.phoneNumber}</Text>
                          </>
                          :
                          <Text style={[styles.information, { width: '100%', textAlign: 'center' }]}>
                            {userOfProfile.email}
                          </Text>
                      }
                    </View>
                    <Text style={styles.title}>Propriedades</Text>

                    <FlatList
                      data={properties}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { handleGoToProperty(item.id) }}>

                          <Property
                            srcImage={item.images[0].url}
                            propertyName={item.name}
                          />
                          {me && <Text style={styles.edit} onPress={() => { handleEditProperty(item.id) }}>Editar</Text>}
                          {me && <Text style={styles.edit} onPress={() => { handleRemoveProperty(item.id) }}>Remover</Text>}
                        </TouchableOpacity>
                      )}
                      ItemSeparatorComponent={() => <View style={{}} />}
                      contentContainerStyle={{ paddingBottom: 69 }}
                      style={{ width: '100%' }}
                      showsVerticalScrollIndicator={false}
                    />
                  </Form>
                </View>
              </ImageBackground>
            </KeyboardAvoidingView>
          </ScrollView>
      }
    </>
  );
}
