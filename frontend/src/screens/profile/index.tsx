import React, { useState } from 'react';

import { Text, View, KeyboardAvoidingView, Platform, Image, ScrollView} from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { EvilIcons } from '@expo/vector-icons';

import { styles } from './styles';

export function Profile() {

    return (
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.container}>
            <Form title="">
            <EvilIcons style={styles.profileIcons} name="user" size={180} color="black" />
            <Text style={styles.profileTitle}>José da Silva</Text>
              <View style={styles.containerInfo}>
                <Text style={styles.information}>josedasilva@gmail.com</Text>
                <Text style={styles.information}>-</Text>
                <Text style={styles.information}>(47) 98852-3369</Text>
              </View>
            <Text style={styles.title}>Propriedades</Text>
            <View style={[styles.property, styles.nameField, styles.field]}>
              
              <Image
                source={require('../../assets/testeCasa.jpg')}
                style={styles.propertyImage}
              />
              <Text style={styles.propertyTitle}>Residencial Monte Carlo</Text>
            </View>

            <View style={[styles.property, styles.nameField, styles.field]}>
              <View style={styles.line} />
              <Image
                source={require('../../assets/testeCasa2.jpg')}
                style={styles.propertyImage}
              />
              <Text style={styles.propertyTitle}>Casa Bela Vista</Text>
            </View>

            <View style={[styles.property, styles.nameField, styles.field]}>
              <View style={styles.line} />
              <Image
                source={require('../../assets/testeCasa3.png')}
                style={styles.propertyImage}
              />
              <Text style={styles.propertyTitle}>Apartamento Luxuoso </Text>
            </View>
            </Form>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

