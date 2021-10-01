import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { PropertyInfo } from "../screens/propertyInfo";
import { PropertyRegister } from "../screens/propertyRegister";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="home" component={Home} />
            <Screen name="propertyInfo" component={PropertyInfo} />
            <Screen name="propertyRegister" component={PropertyRegister} />
        </Navigator>
    )
}