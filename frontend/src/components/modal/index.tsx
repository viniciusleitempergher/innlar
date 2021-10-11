import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { Button } from '../button';

import { styles } from './styles';

type Props = {
  ceps: Array<string>;
  cities: Array<string>;
  districts: Array<string>;
  states: Array<string>;
}

export function ModalHome({ ceps, cities, districts, states }: Props) {
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.iconClose}>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AntDesign name="close" size={24} color="#4B5754" />
              </Pressable>
            </View>
            <Text style={styles.modalText}>Selecione onde você deseja encontrar a sua propriedade:</Text>
            <View style={styles.buttons}>
              <Button style={styles.buttonSearch} title="Cidade" />
              <Button style={styles.buttonSearch} title="Estado" />
              <Button style={styles.buttonSearch} title="Bairro" />
              <Button style={styles.buttonSearch} title="CEP" />
            </View>

            <View style={styles.buttonsModalClose}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Buscar</Text>
              </Pressable>
            </View>

          </View>
        </View>

      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Buscar Propriedade</Text>
      </Pressable>
    </View>
  );
};
