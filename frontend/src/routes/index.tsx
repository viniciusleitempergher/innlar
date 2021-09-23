import React from 'react';

import { createStackNavigator } from "@react-navigation/stack"
import { Login } from '../screens/login';
import { Home } from '../screens/home';
import { PropertyInfo } from '../screens/propertyInfo';
import { PropertyRegister } from '../screens/propertyRegister';
import { Register } from '../screens/register';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <Navigator>
            <Screen name="login" component={Login} />
            <Screen name="home" component={Home} />
            <Screen name="propertyInfo" component={PropertyInfo} />
            <Screen name="propertyRegister" component={PropertyRegister} />
            <Screen name="register" component={Register} />
        </Navigator>
    )
}