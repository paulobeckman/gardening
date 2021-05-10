import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Options from './drawer'
import CreateService from '../pages/CreateService'
import ServicesTabs from './gardenerTabs'
import UsersTabs from './usersTabs'
import DetailsService from '../pages/DetailsService'
import CreateScheduling  from '../pages/CreateScheduling'

const AuthStack = createStackNavigator();

export default function AppRoutes(){
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Options" component={Options} />
            <AuthStack.Screen name="Services" component={ServicesTabs} />
            <AuthStack.Screen name="Users" component={UsersTabs} />
            <AuthStack.Screen name="CreateService" component={CreateService} />
            <AuthStack.Screen name="DetailsService" component={DetailsService} />
            <AuthStack.Screen name="CreateScheduling" component={CreateScheduling} />
        </AuthStack.Navigator>
    );
}  