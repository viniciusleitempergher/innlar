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
import MapView from "react-native-maps";
import { UserProfile } from "../../components/userProfile";
import { TouchableOpacity } from "react-native-gesture-handler";

export function PropertyInfo() {
  let [latitude, setLatitude] = useState(0);
  let [longitude, setLongitude] = useState(0);

  useEffect(() => {
    (async () => {
      let response = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address:
              "Rua%20Rio%20de%20Janeiro,%20471%20Bairro%20das%20Capitais%20Timbó%20-%20SC",
            key: "AIzaSyD9fg133bwbh872XIheUw_fQtHPN3X4QDE",
          },
        }
      );

      console.log(response.data);
    })();
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Form>
          <AntDesign name="arrowleft" size={30} style={styles.arrow} />
          <View style={styles.property}>
            <Image
              source={require("../../assets/testeCasa3.png")}
              style={styles.propertyImage}
            />

            <Text style={styles.propertyTitle}>Apartamento Luxuoso</Text>
            <View style={styles.stars}>
              <Entypo name="star" size={20} color="black" />
              <Entypo name="star" size={20} color="black" />
              <Entypo name="star" size={20} color="black" />
              <Entypo name="star" size={20} color="black" />
              <Entypo name="star-outlined" size={20} color="black" />
            </View>

            <Text style={styles.description}>Caracteristicas:</Text>
            <View style={styles.icons}>
              <View style={styles.roomIcons}>
                <FontAwesome name="bed" size={24} style={styles.colorIcons}/>
              </View>
              <View style={styles.roomIcons}>
                <FontAwesome name="bathtub" size={24} style={styles.colorIcons} />
              </View>
              <View style={styles.carIcon}>
                <FontAwesome5 name="car" size={24} style={styles.colorIcons} />
              </View>
              <View style={styles.roomIcons}>
                <MaterialIcons name="grid-on" size={24} style={styles.colorIcons} />
              </View>
            </View>
            <View style={styles.textIcons}>
              <Text style={styles.roomIconsText}>3 Quartos</Text>
              <Text style={styles.roomIconsText}>2 Banheiros</Text>
              <Text style={styles.roomIconsText}>2 Garagens</Text>
              <Text style={styles.roomIconsText}>120 m²</Text>
            </View>
            <View>
              <Text style={styles.titleDescription}>Descriçao</Text>
              <Text style={styles.propertyDescription}>
                Lindo e amplo apartamento no bairro das Nações. São 120m² de
                muito bem divididos, composto de 1 suíte mais dois dormitórios,
                living, salas com belíssima vista (5º pavimento), lavabo, área
                de serviço e duas vagas de garagem individuais.
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
                latitude, //posição inicial do mapa
                longitude, //posição inicial do mapa
                latitudeDelta: 0.195, //determina o zoom do mapa
                longitudeDelta: 0.1921, //determina o zoom do mapa
              }}
            />
            <View>
              <Text style={styles.title}>Localização</Text>
              <Text style={styles.text}>
                Rua Rio de Janeiro, 451, Bairro das Nações, Cidade Timbó - SC{" "}
              </Text>
              <Text style={styles.title}>Locador</Text>
              <Text style={styles.profile}>José da Silva</Text>
              <Text style={styles.email}>josedasilva@gmail.com</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Ver Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { marginTop: 15 }]}>
              <Text style={styles.textButton}>Chat</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </View>
    </ScrollView>
  );
}
