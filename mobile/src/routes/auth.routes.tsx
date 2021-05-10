import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import Register from '../pages/Register'
import SelectMapPosition from '../pages/SelectMapPosition'
import Login from '../pages/Login'

const AppStack = createStackNavigator();

export default function AuthRoutes(){
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Landing" component={Landing}/>
                <AppStack.Screen name="Register" component={Register}/>
                <AppStack.Screen name="SelectMapPosition" component={SelectMapPosition}/>
                <AppStack.Screen name="Login" component={Login}/>
        </AppStack.Navigator>
    );
}  