import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { Button } from '../button';

import { styles } from './styles';
import { ItemPicker } from "../picker";

type Props = {
  items: Array<string>;
  text: string;
  setItem: Dispatch<SetStateAction<string>>;
  item: string;
}

export function PickerModal({ items, text, setItem, item }: Props) {
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
            <Text style={styles.modalText}>{text}</Text>
            <View style={styles.buttons}>
              <ItemPicker items={items} style={styles.buttonSearch} item={item} setItem={setItem} />
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
        style={[styles.button, styles.buttonSearch]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{item == "" ? text : item}</Text>
      </Pressable>
    </View>
  );
};
