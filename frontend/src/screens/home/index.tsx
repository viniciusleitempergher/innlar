import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Form } from "../../components/form";
import { ModalHome } from "../../components/modal";
import { ModalMenu } from "../../components/modalMenu";

import { styles } from "./styles";
import { PropertyResult } from "../../components/propertyResult";

import { FlatList } from "react-native-gesture-handler";
import { api } from "../../services/api";
import { PropertyType } from "../../types/property";
import { Loading } from "../../components/loading";

export function Home({ navigation }: any) {
  const [properties, setProperties] = useState([] as Array<PropertyType>);
  const [loading, setLoading] = useState(false);

  const [ceps, setCeps] = useState([] as Array<string>);
  const [cities, setCities] = useState([] as Array<string>);
  const [districts, setDistricts] = useState([] as Array<string>);
  const [states, setStates] = useState([] as Array<string>);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        let response = await api.get("/properties/search", {
          params: {
            cep: "",
            city: "",
            district: "",
            state: "",
          }
        })

        setProperties(response.data.properties);

        let filtersResponse = await api.get("/properties/search-filters");

        const { cep, city, district, state } = filtersResponse.data;

        setCeps(cep);
        setCities(city);
        setDistricts(district);
        setStates(state);
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function handleGoToProperty(propertyId: string) {
    navigation.navigate({
      name: 'propertyInfo',
      params: { propertyId },
    });
  }

  function currencyFormat(num: number) {
    let formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatter.format(+num.toFixed(2));
  }

  return (
    <>
      {
        loading
          ? <Loading />
          :
          <ScrollView>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.container}
            >
              <ImageBackground
                source={require("../../assets/whiteBackground.jpg")}
                style={{ width: "100%", height: "100%" }}
              >
                <View style={styles.container}>
                  <Form title="">
                    <ModalMenu navigation={navigation} />
                    <View style={styles.innlarIcon}>
                      <Image
                        source={require("../../assets/logoPreta.png")}
                        style={styles.innlarIcon}
                      />
                    </View>
                    <View style={styles.searchProperty}>
                      <ModalHome ceps={ceps} cities={cities} states={states} districts={districts} setProperties={setProperties} />
                    </View>

                    <FlatList
                      data={properties}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { handleGoToProperty(item.id) }}>
                          <PropertyResult srcImage={item.images[0].url} propertyName={item.name} value={currencyFormat(item.value)} userName={item.user.name} />
                        </TouchableOpacity>
                      )}
                      ItemSeparatorComponent={() => <View style={{}} />}
                      contentContainerStyle={{ paddingBottom: 69 }}
                      style={styles.list}
                      showsVerticalScrollIndicator={false}
                    />
                  </Form>
                </View>
              </ImageBackground>
            </KeyboardAvoidingView>
          </ScrollView>
      }
    </>
  );
}
