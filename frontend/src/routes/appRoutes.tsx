import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { PropertyInfo } from "../screens/propertyInfo";
import { PropertyRegister } from "../screens/propertyRegister";
import { Conversations } from '../screens/conversations';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="home" component={Home} />
            <Screen name="propertyInfo" component={PropertyInfo} />
            <Screen name="propertyRegister" component={PropertyRegister} />
            <Screen name="conversations" component={Conversations} />
        </Navigator>
    )
}