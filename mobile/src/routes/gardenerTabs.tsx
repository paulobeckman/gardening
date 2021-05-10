import React from  'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import RegisteredServices from '../pages/RegisteredServices'
import AllScheduledServices  from '../pages/AllScheduledServices'

const { Navigator, Screen } = createBottomTabNavigator();

function GardenerTabs() {
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
                name="RegisteredServices" 
                component={RegisteredServices} 
                options={{
                    tabBarLabel: 'Serviços',
                    tabBarIcon: ({ color, size, focused}) => {
                        return (
                            <Ionicons name='ios-list' size={size} color={focused ? '#fff' : color}/>
                        );
                    }
                }}
            />
            <Screen 
                name="AllScheduledServices" 
                component={AllScheduledServices}
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

export default GardenerTabs;