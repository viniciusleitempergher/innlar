import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, Image } from "react-native";
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { Button } from '../button';

import { styles } from './styles';

export const ModalMenu = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
        <View  style={styles.modal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={styles.iconClose}>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AntDesign name="close" size={24} color="#4B5754" />
              </Pressable>
            </View>
            <View style={styles.innlarIcon}>
              <Image
              source={require('../../assets/logo.png')} 
              style={styles.innlarIcon} 
              />
            </View>
              <Text style={styles.modalText}>Menu</Text>
              <View style={styles.buttons}>
                <Button style={styles.button} title="Meu Perfil"/>
                <Button style={styles.button} title="Registrar Propriedades"/>
                <Button style={styles.button} title="Sair"
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
          <FontAwesome name="bars" size={24} color="#01525A" />
        </Pressable>
      </View>
    );
  };
  