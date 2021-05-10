import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker, MapEvent, PROVIDER_GOOGLE } from 'react-native-maps'
import { useAuth } from '../../contexts/auth';
import { useNavigation} from '@react-navigation/native';
import * as Location from 'expo-location';

import api from '../../services/api';
import mapMarker from '../../assets/images/pin.png'
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';


interface RegisterDataRouteParams {
    name: string;
    email: string;
    password: string;
    passwordRepeat: string;
    cep: string;
    address: string;
    phone: string;
}

export default function ScheduledServices(){
    const [position, setPosition] = useState({latitude: 0, longitude: 0})
    const [latitude, setLatitude] = useState<Number>();
    const [longitude, setLongitude] = useState<Number>();
    const [errorMsg, setErrorMsg] = useState('');


    const navigation = useNavigation();
    const { signIn } = useAuth();

    const route = useRoute();
    const params = route.params as RegisterDataRouteParams

    async function handleNextStep() {
        const {name, email, password, passwordRepeat, cep, address, phone} = params
        const {latitude, longitude} = position

        const response = await api.post('/users/register', {name, email, password, passwordRepeat, cep, address, phone, latitude, longitude})
        if(response.data.error){
            alert(`${response.data.error}`)
            return navigation.goBack()
        } else {
            signIn() 
        }
    }

    function handleSelectMapPosition(event: MapEvent){
        setPosition(event.nativeEvent.coordinate)
    }

    useEffect(() => {
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

    return(
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
                onPress={handleSelectMapPosition}
            >
                {position.latitude!= 0 && (
                    <Marker
                        icon={mapMarker}
                        style={styles.pin}
                        coordinate={{
                            latitude: position.latitude,
                            longitude: position.longitude,
                        }}
                    />
                )}
            </MapView>
            <RectButton style={styles.backButton} onPress={()=>(navigation.goBack())}>
                <Ionicons name='chevron-back' style={styles.buttonIcon}/>
            </RectButton>
            
            {position.latitude!= 0 && (
                <RectButton style={styles.nextButton} onPress={handleNextStep}>
                    <Text style={styles.nextButtonText}>Cadastrar</Text>
                </RectButton>
            )}
        </View>
    )
}