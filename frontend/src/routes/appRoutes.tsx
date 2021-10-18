import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { PropertyInfo } from "../screens/propertyInfo";
import { Conversations } from '../screens/conversations';
import { Chat } from '../screens/chat';
import { Profile } from '../screens/profile';
import { PropertyRegisterStepOne } from '../screens/propertyRegisterStepOne';
import { PropertyRegisterStepTwo } from '../screens/propertyRegisterStepTwo';
import { PropertyRegisterStepThree } from '../screens/propertyRegisterStepThree';
import { PropertyRegisterStepFour } from '../screens/propertyRegisterStepFour';
import { PropertyEditStepOne } from '../screens/propertyEditStepOne';
import { PropertyEditStepTwo } from '../screens/propertyEditStepTwo';
import { PropertyEditStepThree } from '../screens/propertyEditStepThree';
import { PropertyEditStepFour } from '../screens/propertyEditStepFour';
import { SelectImagesToDelete } from '../screens/selectImagesToDelete';
import { SelectImages } from '../screens/selectImages';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="home" component={Home} />
            <Screen name="propertyInfo" component={PropertyInfo} />
            <Screen name="propertyRegisterStepOne" component={PropertyRegisterStepOne} />
            <Screen name="propertyRegisterStepTwo" component={PropertyRegisterStepTwo} />
            <Screen name="propertyRegisterStepThree" component={PropertyRegisterStepThree} />
            <Screen name="propertyRegisterStepFour" component={PropertyRegisterStepFour} />
            <Screen name="propertyEditStepOne" component={PropertyEditStepOne} />
            <Screen name="propertyEditStepTwo" component={PropertyEditStepTwo} />
            <Screen name="propertyEditStepThree" component={PropertyEditStepThree} />
            <Screen name="propertyEditStepFour" component={PropertyEditStepFour} />
            <Screen name="selectImagesToDelete" component={SelectImagesToDelete} />
            <Screen name="selectImages" component={SelectImages} />
            <Screen name="conversations" component={Conversations} />
            <Screen name="chat" component={Chat} />
            <Screen name="profile" component={Profile} />
        </Navigator>
    )
}