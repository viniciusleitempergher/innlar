import React, { useEffect, useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform, Image, ScrollView,  } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';


import { styles } from './styles';
import MapView from 'react-native-maps';
import { UserProfile } from '../../components/userProfile';


export function PropertyInfo() {

  let [latitude, setLatitude] = useState(0);
  let [longitude, setLongitude] = useState(0);

  useEffect(() => {
    (async () => {
      let response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: "Rua%20Rio%20de%20Janeiro,%20471%20Bairro%20das%20Capitais%20Timbó%20-%20SC",
          key: "AIzaSyD9fg133bwbh872XIheUw_fQtHPN3X4QDE"
        }
      });

      console.log(response.data);
    })()
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        <Form>
          <AntDesign name="left" size={24} color="#01525A" />
          <View style={styles.property}>
            <Image
              source={require('../../assets/testeCasa3.png')}
              style={styles.propertyImage}
            />
            <Text style={styles.propertyTitle}>Apartamento Luxuoso</Text>
            <Text style={styles.value}>Valor: R$1.000.000,00</Text>
            <Text style={styles.propertyDescription}>Lindo e amplo apartamento no bairro das Nações. São 120m² de muito bem divididos, composto de 1 suíte mais dois dormitórios, living, salas com belíssima vista (5º pavimento), lavabo, área de serviço e duas vagas de garagem individuais.</Text>
            <Text style={styles.description}>Esta propriedade possui:</Text>
            <View>
              <View style={styles.roomIcons}>
                <FontAwesome name="bed" size={24} color="#01525A" />
                <Text style={styles.roomIconsText}>3 Quartos</Text>
              </View>
              <View style={styles.roomIcons}>
                <FontAwesome name="bathtub" size={24} color="#01525A" />
                <Text style={styles.roomIconsText}>2 Banheiros</Text>
              </View>
              <View style={styles.roomIcons}>
                <FontAwesome5 name="car" size={24} color="#01525A" />
                <Text style={styles.roomIconsText}>2 Garagens</Text>
              </View>
              <View style={styles.roomIcons}>
                <MaterialIcons name="grid-on" size={24} color="#01525A" />
                <Text style={styles.roomIconsText}>520 m²</Text>
              </View>
            </View>
            <UserProfile phoneNumber="47 98801 - 0812" username="Kayo Felipe" />
            <MapView
              showsUserLocation={true}		//destacando a localização do usuário no mapa
              showsMyLocationButton={false} 	//ocultando o botão que move o mapa para a localização do usuário
              toolbarEnabled={false}	//ocultando opções do google maps ao clicar em objetos do mapa
              style={{
                display: 'flex',
                height: '30%',
                width: '100%',
              }}
              initialRegion={{
                latitude,	//posição inicial do mapa
                longitude,	//posição inicial do mapa
                latitudeDelta: 0.195,  	//determina o zoom do mapa
                longitudeDelta: 0.1921,	//determina o zoom do mapa
              }}
            />
          </View>
        </Form>
      </View>
    </ScrollView>
  );
}