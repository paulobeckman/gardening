import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

import api from '../../services/api';
import mapMarker from '../../assets/images/pin.png'
import styles from './styles'

import {useAuth} from '../../contexts/auth'


interface Service {
    id: number;
    user_id: number;
    user_name: string;
    latitude: number;
    longitude: number;

    title: string;
    price: number;
    description: string;
}

export default function ScheduledServices(){
    const [services, setServices] = useState<Service[]>([]);
    const [latitude, setLatitude] = useState<Number>();
    const [longitude, setLongitude] = useState<Number>();
    const [errorMsg, setErrorMsg] = useState('');

    const navigation = useNavigation();
    const { signOut, user } = useAuth();

    function handleNextDetailService(user_id: number) {
        if(Number(user) != user_id){
            navigation.navigate('DetailsService', {user_id})
        }else{
            alert('Você é o jardineiro')
        }
    }

    async function handleSetLocation() {
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
    }

    async function handleLogoutUser(){    
        api.post('/users/logout')

        signOut()
    }

    useEffect(() => {
        api.get(`/services`).then(response => {
            setServices(response.data)
        }),

        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        
            let location = await Location.getCurrentPositionAsync({});
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
        })();
    }, [])

    if(!longitude){
        return(
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
            >
            </MapView>
        )
    }

    return (
        <View style={styles.container}>           
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map} 
                initialRegion={{
                    latitude:  latitude as any,
                    longitude: longitude as any,
                    latitudeDelta: 0.030,
                    longitudeDelta:  0.030,
                }}
                region={{
                    latitude:  latitude as any,
                    longitude: longitude as any,
                    latitudeDelta: 0.030,
                    longitudeDelta:  0.030,
                }}
            >
               {services.map(service => {
                   return(
                        <Marker
                            key={service.id}
                            icon={mapMarker}
                            calloutAnchor={{
                                x: 3.1,
                                y: 0.8
                            }}
                            style={styles.pin}
                            coordinate={{
                                latitude: Number(service.latitude),
                                longitude: Number(service.longitude),
                            }}
                        >
                            <Callout tooltip onPress={() => (handleNextDetailService(service.user_id))}>
                                <View style={styles.calloutContainer}>
                                    <Text style={styles.calloutText}>{service.user_name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                   )
               })}
            </MapView>
            <RectButton style={styles.logout} onPress={()=>(handleLogoutUser())}>
                <Ionicons name='log-out-outline' style={styles.buttonIcon}/>
            </RectButton>

            <RectButton style={styles.menuButton} onPress={()=>(navigation.navigate('Services'))}>
                <Ionicons name='menu' style={styles.buttonIcon}/>
            </RectButton>
            
            <RectButton style={styles.nextButton} onPress={()=>handleSetLocation()}>
                <Ionicons name='location-outline' style={styles.buttonIcon}/>
            </RectButton>
        </View>
    );
}