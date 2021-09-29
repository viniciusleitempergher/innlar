import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from '../hooks/auth';
import { AppRoutes } from './appRoutes';
import { SignRoutes } from './signRoutes';

export function Routes() {

    const { user } = useAuth();

    return (
        <>
            {
                (user) ? <AppRoutes />
                    : <SignRoutes />
            }
        </>
    )
}