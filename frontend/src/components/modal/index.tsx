import React, { Dispatch, SetStateAction, useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { Button } from '../button';

import { styles } from './styles';

import { PickerModal } from '../pickerModal';
import { PropertyType } from "../../types/property";
import { api } from "../../services/api";

type Props = {
  ceps: Array<string>;
  cities: Array<string>;
  districts: Array<string>;
  states: Array<string>;
  setProperties: Dispatch<SetStateAction<PropertyType[]>>;
}

export function ModalHome({ ceps, cities, districts, states, setProperties }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  async function handleSearch() {
    setModalVisible(!modalVisible)
    console.log(cep, state, city, district);
    const response = await api.get("/properties/search", {
      params: {
        cep,
        state,
        city,
        district
      }
    });

    console.log(response.data.properties);
    setProperties(response.data.properties);
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
              <PickerModal items={ceps} text="Selecionar Cep" item={cep} setItem={setCep} />
              <PickerModal items={states} text="Selecionar Estado" item={state} setItem={setState} />
              <PickerModal items={cities} text="Selecionar Cidade" item={city} setItem={setCity} />
              <PickerModal items={districts} text="Selecionar Bairro" item={district} setItem={setDistrict} />
            </View>

            <View style={styles.buttonsModalClose}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleSearch}
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
