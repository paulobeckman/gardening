import React from 'react'
import {View, ActivityIndicator} from 'react-native';
import { useAuth } from '../contexts/auth'

import  AuthRoutes from './auth.routes'
import  AppRoutes  from './app.routes'

export default function routes(){
    const { signed, loading } = useAuth()

    if(loading){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFD148'}}>
                <ActivityIndicator size="large" color="#999"/>
            </View>
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
}