import React, { useEffect, useState } from "react";

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
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";

import { styles } from "./styles";
import MapView, { Marker } from "react-native-maps";
import { UserProfile } from "../../components/userProfile";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Loading } from "../../components/loading";
import { api } from "../../services/api";
import { PropertyType } from "../../types/property";
import { useAuth } from "../../contexts/auth";
import { UserType } from "../../types/user";

export function PropertyInfo({ navigation, route }: any) {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState({} as PropertyType);

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const propertyId = route.params.propertyId;

  useEffect(() => {
    (async () => {
      try {
        let propertyResponse = await api.get("/properties", {
          params: { uuid: propertyId }
        });

        const property: PropertyType = propertyResponse.data.property;

        let queryString = property.address.street + " " + property.address.district + " " + property.address.city + " " + property.address.cep;
        queryString = queryString.split(" ").join("%20");

        setProperty(property);

        let googleResponse = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address:
                queryString,
              key: "AIzaSyD9fg133bwbh872XIheUw_fQtHPN3X4QDE",
            },
          }
        );

        let { lat, lng } = googleResponse.data.results[0].geometry.location;

        setLatitude(lat);
        setLongitude(lng);
      } catch (e: any) {
        console.log(e.message);

        throw e;
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoToProfile() {
    navigation.navigate({
      name: "profile",
      params: { userId: property.user.id }
    })
  }

  function handleChat() {
    navigation.navigate({
      name: "chat",
      params: {
        userId: property.user.id,
        chat: {
          users: [
            property.user,
            user,
          ],
          messages: {

          }
        }
      }
    })
  }

  return (
    <>
      {
        loading ?
          <Loading />
          :
          <>
            <ScrollView>
              <View style={styles.container}>
                <Form>
                  <AntDesign name="arrowleft" size={30} style={styles.arrow} onPress={handleGoBack} />
                  <View style={styles.property}>

                    <Image
                      source={{ uri: "../../assets/testeCasa.jpg" }}
                      style={styles.propertyImage}
                    />

                    <Text style={styles.propertyTitle}>{property.name}</Text>
                    <View style={styles.stars}>
                      <Entypo name="star" size={20} color="black" />
                      <Entypo name="star" size={20} color="black" />
                      <Entypo name="star" size={20} color="black" />
                      <Entypo name="star" size={20} color="black" />
                      <Entypo name="star-outlined" size={20} color="black" />
                    </View>

                    <Text style={styles.description}>Caracteristicas:</Text>
                    <View style={styles.textIcons}>
                      <View style={styles.roomIcons}>
                        <FontAwesome name="bed" size={24} style={styles.colorIcons} />
                      </View>
                      <Text style={styles.roomIconsText}>{property.numberRooms} Quartos</Text>
                      <View style={styles.roomIcons}>
                        <FontAwesome
                          name="bathtub"
                          size={24}
                          style={styles.colorIcons}
                        />
                      </View>
                      <Text style={styles.roomIconsText}>{property.numberBathRooms} Banheiros</Text>
                      <View style={styles.roomIcons}>
                        <MaterialIcons
                          name="grid-on"
                          size={24}
                          style={styles.colorIcons}
                        />
                      </View>
                      <Text style={styles.roomIconsText}>{property.squareMeters} m²</Text>
                    </View>
                    <View>
                      <Text style={styles.titleDescription}>Descrição</Text>
                      <Text style={styles.propertyDescription}>
                        {property.description}
                      </Text>
                      <Text style={styles.titleDescription}>Outras Características</Text>
                      <Text style={styles.propertyDescription}>
                        Possui garagem? {property.hasGarage ? "sim" : "não"}
                      </Text>
                      <Text style={styles.propertyDescription}>
                        Possui Área de Festa? {property.hasPartyArea ? "sim" : "não"}
                      </Text>
                    </View>
                    <MapView
                      showsUserLocation={true} //destacando a localização do usuário no mapa
                      showsMyLocationButton={false} //ocultando o botão que move o mapa para a localização do usuário
                      toolbarEnabled={false} //ocultando opções do google maps ao clicar em objetos do mapa
                      style={{
                        display: "flex",
                        height: "30%",
                        width: "100%",
                      }}
                      initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.0045,
                      }}
                    >
                      <Marker
                        coordinate={{
                          latitude,
                          longitude
                        }}
                        title={"title"}
                        description={"description"}
                      />
                    </MapView>

                    <View>
                      <Text style={styles.title}>Localização</Text>
                      <Text style={styles.text}>
                        {property.address.street + ", " + property.address.number + ", " + property.address.district + ", "
                          + property.address.city + " - " + property.address.state}
                      </Text>
                      <Text style={styles.title}>Locador</Text>
                      <Text style={styles.profile}>{property.user.name}</Text>
                      <Text style={styles.email}>{property.user.email}</Text>
                      {property.user.phoneNumber && <Text style={styles.email}>{property.user.phoneNumber}</Text>}
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleGoToProfile}>
                      <Text style={styles.textButton}>Ver Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, { marginTop: 15 }]} onPress={handleChat}>
                      <Text style={styles.textButton}>Chat</Text>
                    </TouchableOpacity>
                  </View>
                </Form>
              </View>
            </ScrollView>
            <View style={styles.alugueAgora}>
              <Text style={styles.textInput}>R$ {property.value}</Text>
              <TouchableOpacity style={styles.alugueButton} onPress={handleChat}>
                <Text style={styles.textButton2}>Alugue agora</Text>
              </TouchableOpacity>
            </View>
          </>
      }
    </>
  );
}
