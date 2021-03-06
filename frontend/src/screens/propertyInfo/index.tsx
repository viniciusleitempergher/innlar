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
import imagemCasa from '../../assets/testeCasa2.jpg'

import { styles } from "./styles";
import MapView, { Marker } from "react-native-maps";
import { UserProfile } from "../../components/userProfile";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Loading } from "../../components/loading";
import { api } from "../../services/api";
import { PropertyType } from "../../types/property";
import { useAuth } from "../../contexts/auth";
import { UserType } from "../../types/user";
import ImageSwipe from "../../components/slider";

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
          messages: [

          ]
        }
      }
    })
  };

  function currencyFormat(num: number) {
    let formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatter.format(+num.toFixed(2));
  }

  return (
    <>
      {
        loading ?
          <Loading />
          :
          <>

            <ScrollView style={styles.scrollview}>
              <ImageSwipe images={property.images} style={styles.slider} />
              <View style={styles.container}>
                <Form>
                  <AntDesign name="arrowleft" size={30} style={styles.arrow} onPress={handleGoBack} />
                  <View style={styles.property}>

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
                      <Text style={styles.roomIconsText}>{property.squareMeters} m??</Text>
                    </View>
                    <View>
                      <Text style={styles.titleDescription}>Descri????o</Text>
                      <Text style={styles.propertyDescription}>
                        {property.description}
                      </Text>
                      <Text style={styles.titleDescription}>Outras Caracter??sticas</Text>
                      <Text style={styles.propertyDescription}>
                        Possui garagem? {property.hasGarage ? "sim" : "n??o"}
                      </Text>
                      <Text style={styles.propertyDescription}>
                        Possui ??rea de festa? {property.hasPartyArea ? "sim" : "n??o"}
                      </Text>
                      <Text style={styles.propertyDescription}>
                        Possui piscina? {property.hasPool ? "sim" : "n??o"}
                      </Text>
                      <Text style={styles.propertyDescription}>
                        Possui churrasqueira? {property.hasGrill ? "sim" : "n??o"}
                      </Text>
                    </View>
                    <MapView
                      showsUserLocation={true} //destacando a localiza????o do usu??rio no mapa
                      showsMyLocationButton={false} //ocultando o bot??o que move o mapa para a localiza????o do usu??rio
                      toolbarEnabled={false} //ocultando op????es do google maps ao clicar em objetos do mapa
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
                      <Text style={styles.title}>Localiza????o</Text>
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

              <Text style={styles.textInput}>{currencyFormat(property.value)}</Text>
              <TouchableOpacity style={styles.alugueButton} onPress={handleChat}>
                <Text style={styles.textButton2}>Alugue agora</Text>
              </TouchableOpacity>
            </View>
          </>
      }
    </>
  );
}