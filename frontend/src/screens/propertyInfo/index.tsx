import React, { useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform, Image, ScrollView} from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';


import { styles } from './styles';


export function PropertyInfo() {

  return (
    <ScrollView>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        <Form title="">
        <AntDesign name="left" size={24} color="#01525A" />
          <View style={styles.property}> 
            <Image
                source={require('../../assets/testeCasa3.png')} 
                style={styles.propertyImage} 
                />
            <Text style={styles.propertyTitle}>Apartamento Luxuoso</Text>
            <Text style={styles.value}>Valor: R$650.000,00</Text>
            <Text style={styles.propertyDescription}>Lindo e amplo apartamento no bairro das Nações. São 120m² de muito bem divididos, composto de 1 suíte mais dois dormitórios, living, salas com belíssima vista (5º pavimento), lavabo, área de serviço e duas vagas de garagem individuais.</Text>
            <Text style={styles.description}>Esta propriedade possui:</Text>
            <View>
                <View style={styles.roomIcons}>
                    <FontAwesome name="bed" size={24} color="#01525A" />
                    <Text style={styles.roomIconsText}>3 Quartos</Text>
                </View>
                <View style={styles.roomIcons}>
                    <FontAwesome name="bathtub" size={24} color="#01525A"/>
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

          </View>


        </Form>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}