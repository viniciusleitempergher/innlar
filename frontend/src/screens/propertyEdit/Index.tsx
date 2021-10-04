import React, { useState } from 'react';

import { View } from 'react-native';
import { PropertyEditStepOne } from '../propertyEditStepOne';
import { PropertyEditStepThree } from '../propertyEditStepThree';
import { PropertyEditStepTwo } from '../propertyEditStepTwo';
import { PropertyEditStepFour } from '../propertyEditStepFour';

import { styles } from './styles';

type Form = {
  name: string,
  description: string,
  state: string,
  cep: string,
  city: string,
  district: string,
  street: string,
  number: number,
  squareMeters: number,
  numberRooms: number,
  numberBathRooms: number,
  numberKitchens: number,
  hasPartyArea: boolean,
  hasGrill: boolean,
  hasPool: boolean,
  hasGarage: boolean,
  propertyValue: number
}

export type stepTwoParams = {
  nome: string,
  descricao: string
};

export type stepThreeParams = {
  state: string,
  cep: string,
  city: string,
  district: string,
  street: string,
  number: number
}

export function PropertyEdit() {
  const [step, setStep] = useState(0);

  let form: Form = {
    name: "",
    description: "",
    state: "",
    cep: "",
    city: "",
    district: "",
    street: "",
    number: 0,
    squareMeters: 0,
    numberRooms: 0,
    numberBathRooms: 0,
    numberKitchens: 0,
    hasPartyArea: false,
    hasGrill: false,
    hasPool: false,
    hasGarage: false,
    propertyValue: 0
  };

  function handleStepBack() {
    setStep(step - 1)
  }

  function handleStepTwo({ nome, descricao }: stepTwoParams) {
    form.name = nome;
    form.description = descricao;
    setStep(2)
  }

  function handleStepThree({ state, cep, city, district, street, number }: stepThreeParams) {
    form.state = state;
    form.cep = cep;
    form.city = city;
    form.district = district;
    form.street = street;
    form.number = number;
    setStep(3)
  }

  function handleStepFour() {
    setStep(4)
  }

  return (
    <View style={styles.container}>
      {
        (step == 1) ?
          <PropertyEditStepOne next={handleStepTwo} />
          : (step == 2) ?
            <PropertyEditStepTwo back={handleStepBack} next={handleStepThree} />
            : (step == 3) ?
              <PropertyEditStepThree back={handleStepBack} next={handleStepFour} />
              : <PropertyEditStepFour back={handleStepBack} next={handleStepFour}/>
      }
    </View>
  );
}