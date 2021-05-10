import React from  'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import GardenerServices from '../pages/GardenerServices'
import UserSchedules  from '../pages/UserSchedules'

const { Navigator, Screen } = createBottomTabNavigator();

function UsersTabs() {
    return(
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Ubuntu_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#FFF',
                activeBackgroundColor: '#59A563',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#FFF'
            }}
        >
            <Screen 
                name="GardenerServices" 
                component={GardenerServices} 
                options={{
                    tabBarLabel: 'Jardineiros',
                    tabBarIcon: ({ color, size, focused}) => {
                        return (
                            <Ionicons name='people' size={size} color={focused ? '#fff' : color}/>
                        );
                    }
                }}
            />
            <Screen 
                name="UserSchedules" 
                component={UserSchedules}
                options={{
                    tabBarLabel: 'Agendamentos',
                    tabBarIcon: ({ color, size, focused}) => {
                        return (
                            <Ionicons name='calendar-sharp' size={size} color={focused ? '#fff' : color}/>
                        );
                    }
                }}
            />
        </Navigator>
    );
}

export default UsersTabs;