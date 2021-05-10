import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAuth } from '../contexts/auth'

const Drawer = createDrawerNavigator();

import ServicesTabs from './gardenerTabs'
import UsersTabs from './usersTabs'

export default function ScheduledServices(){
    const { user } = useAuth()
    
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Serviços" component={UsersTabs}/>
            <Drawer.Screen name="Jardineiros" component={ServicesTabs} />
        </Drawer.Navigator>
    )
}