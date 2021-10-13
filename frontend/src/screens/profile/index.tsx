import React, { useEffect, useState } from "react";

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
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import apto from "../../assets/testeCasa.jpg";
import apto2 from "../../assets/testeCasa2.jpg";
import apto3 from "../../assets/testeCasa3.png";

import { Property } from "../../components/property";
import { Loading } from "../../components/loading";
import { api } from "../../services/api";
import { UserType } from "../../types/user";
import { useAuth } from "../../contexts/auth";

export function Profile({ navigation, route }: any) {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [userOfProfile, setUserOfProfile] = useState({} as UserType);
  const userId = route.params.userId;

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    (async () => {
      try {
        let response = await api.get("/users", {
          params: {
            id: userId
          }
        });

        setUserOfProfile(response.data);
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const me = user.id == userId;

  return (
    <>
      {
        loading ?
          <Loading />
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
                    <TouchableOpacity onPress={handleGoBack} >
                      <AntDesign name="arrowleft" size={30} color="black" />
                    </TouchableOpacity>
                    <View style={styles.profileIconBorder}>
                      <EvilIcons
                        style={styles.profileIcon}
                        name="user"
                        color="black"
                      />
                    </View>
                    {me ? (
                      <View style={styles.buttonBorder}>
                        <MaterialCommunityIcons
                          name="image-edit"
                          size={30}
                          color="black"
                        />
                      </View>
                    ) : (
                        <FontAwesome5
                          style={styles.button}
                          name="home"
                          size={35}
                          color="black"
                        />
                      )}
                    <View style={styles.stars}>
                      <Entypo name="star" size={24} color="black" />
                      <Entypo name="star" size={24} color="black" />
                      <Entypo name="star" size={24} color="black" />
                      <Entypo name="star" size={24} color="black" />
                      <Entypo name="star-outlined" size={24} color="black" />
                    </View>
                    <Text style={styles.profileTitle}>{userOfProfile.name}</Text>
                    <View style={styles.containerInfo}>
                      {
                        userOfProfile.phoneNumber ?
                          <>
                            <Text style={styles.information}>
                              {userOfProfile.email}
                            </Text>
                            <Text style={styles.information}>-</Text>
                            <Text style={styles.information}>{userOfProfile.phoneNumber}</Text>
                          </>
                          :
                          <Text style={[styles.information, { width: '100%', textAlign: 'center' }]}>
                            {userOfProfile.email}
                          </Text>
                      }
                    </View>
                    <Text style={styles.title}>Propriedades</Text>

                    <Property
                      srcImage={apto}
                      propertyName="Residencial Monte Carlo"
                    />
                    {me && <Text style={styles.edit}>Editar</Text>}
                    <Property srcImage={apto2} propertyName="Casa Bela Vista" />
                    {me && <Text style={styles.edit}>Editar</Text>}
                    <Property srcImage={apto3} propertyName="Apartamento Luxuoso" />
                    {me && <Text style={styles.edit}>Editar</Text>}
                  </Form>
                </View>
              </ImageBackground>
            </KeyboardAvoidingView>
          </ScrollView>
      }
    </>
  );
}
