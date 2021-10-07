import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from '../contexts/auth';
import { AppRoutes } from './appRoutes';
import { SignRoutes } from './signRoutes';
import { NavigationContainer } from '@react-navigation/native';

export function Routes() {

    const { user } = useAuth();

    return (
        <NavigationContainer
            theme={{
                dark: false,
                colors: {
                    primary: 'rgba(255, 45, 85, 0)',
                    background: 'rgba(242, 242, 242, 0)',
                    card: 'rgba(255, 255, 255, 0)',
                    text: 'rgba(28, 28, 30, 0)',
                    border: 'rgba(199, 199, 204, 0)',
                    notification: 'rgba(255, 69, 58, 0)',
                }
            }}
        >
            {
                (user.name) ? <AppRoutes />
                    : <SignRoutes />
            }
        </NavigationContainer>
    )
}