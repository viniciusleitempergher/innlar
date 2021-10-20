import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, Image } from "react-native";
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { Button } from '../button';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from '@react-navigation/stack'
import { useAuth } from "../../contexts/auth";


export const ModalMenu = ({ navigation }: any) => {
  const { signOut, user } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);

  function handleConversations() {
    navigation.navigate("conversations")
  }

  function handleMyProfile() {
    navigation.navigate({
      name: "profile",
      params: { userId: user.id }
    })
  }

  function handleRegisterProperty() {
    navigation.navigate("propertyRegisterStepOne")
  }

  function handleSignOut() {
    signOut();
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
              {user.avatar == "" || user.avatar == null ?
                <FontAwesome style={styles.userImage} name="user-circle-o" />
                : <Image source={{ uri: user.avatar }} style={{ flex: 1, borderRadius: 500 }} />
              }
              <View style={styles.buttons}>
                <Button style={styles.button} title="Meu Perfil" onPress={handleMyProfile} />

                <Button title="Conversas" style={styles.button} onPress={handleConversations} />

                <Button style={styles.button} title="Registrar Propriedades" onPress={handleRegisterProperty} />

                <Button style={styles.button1} title="Sair" onPress={handleSignOut} />

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
