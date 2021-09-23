import React, { useState, Component } from 'react';

import { Text, View, KeyboardAvoidingView, Platform, Image, ScrollView, Modal, Alert, Pressable } from 'react-native';
import { Form } from '../../components/form';
import { TextArea } from '../../components/textArea';
import { Button } from '../../components/button';
import { FontAwesome } from '@expo/vector-icons';
import { ModalHome } from '../../components/modal';
import { ModalMenu } from '../../components/modalMenu';

import { styles } from './styles';


export function Home() {

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.container}>
          <Form title="">
            <ModalMenu />
            <View style={styles.innlarIcon}>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.innlarIcon}
              />
            </View>
            <View style={styles.searchProperty}>
              <ModalHome />
            </View>
            <View style={[styles.property, styles.nameField, styles.field]}>
              <View style={styles.line} />
              <Image
                source={require('../../assets/testeCasa.jpg')}
                style={styles.propertyImage}
              />
              <Text style={styles.propertyTitle}>Residencial Monte Carlo</Text>
              <Text style={styles.value}>Valor: R$650.000,00</Text>
            </View>

            <View style={[styles.property, styles.nameField, styles.field]}>
              <View style={styles.line} />
              <Image
                source={require('../../assets/testeCasa2.jpg')}
                style={styles.propertyImage}
              />
              <Text style={styles.propertyTitle}>Casa Bela Vista</Text>
              <Text style={styles.value}>Valor: R$845.600,00</Text>
            </View>

            <View style={[styles.property, styles.nameField, styles.field]}>
              <View style={styles.line} />
              <Image
                source={require('../../assets/testeCasa3.png')}
                style={styles.propertyImage}
              />
              <Text style={styles.propertyTitle}>Apartamento Luxuoso </Text>
              <Text style={styles.value}>Valor: R$1.000.000,50</Text>
            </View>

          </Form>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}