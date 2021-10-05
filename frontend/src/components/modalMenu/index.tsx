import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, Image } from "react-native";
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { Button } from '../button';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from '@react-navigation/stack'


export const ModalMenu = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  function handleConversations() {
    navigation.navigate("conversations")
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.iconClose}>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <AntDesign name="close" size={24} color="#666666" />
                </Pressable>
              </View>
              <View style={styles.innlarIcon}>
                <Image
                  source={require('../../assets/logoPreta.png')}
                  style={styles.innlarIcon}
                />
              </View>
              <FontAwesome style={styles.userImage} name="user-circle-o" />
              <View style={styles.buttons}>
                <Button style={styles.button} title="Meu Perfil" />
                <Button style={styles.button} title="Conversas" onPress={handleConversations} />
                <Button style={styles.button} title="Registrar Propriedades"
                />

                <Button style={styles.button1} title="Sair"
                />

              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.barsIcon}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="bars" size={24} color="#666666" />
      </Pressable>
    </View>
  );
};
