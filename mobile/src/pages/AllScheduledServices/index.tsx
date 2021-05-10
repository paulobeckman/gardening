import React, { useState ,useEffect } from 'react'
import {Text, ScrollView, View, Linking, TouchableOpacity} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, MapEvent } from 'react-native-maps';

import api from '../../services/api';
import styles from './styles'
import mapMarker from '../../assets/images/pin.png'

interface Schedules {
    id: number;
    date: string;
    hour: string;
    client_name: string;
    client_phone: string;
    title: string;
    description: string;
    price: string;
    address: string;
    latitude: number;
    longitude: number;
}

export default function AllScheduledServices(){
    const [schedules, setSchedules] = useState<Schedules[]>([])

    useEffect(() => {
        api.get(`/scheduling/schedules`).then(response => { 
            setSchedules(response.data)
        })
    }, [])
    
    if(!schedules[0]){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Veja quais dos seus seviços estão agendados</Text>
                <View style={styles.constentMensagem}>
                    <Text style={styles.mensagem}>Nenhum dos seus serviços estão agendados</Text>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Veja quais dos seus seviços estão agendados</Text>

            <ScrollView>
                {schedules.map(scheduling => {
                    return(
                        <View key={scheduling.id} style={styles.card}>
                            <View style={styles.cardInformation}>
                                <View style={styles.img}></View>
                                <View style={styles.allDesciptionCard}>
                                    <Text style={styles.nameCard}>{scheduling.client_name}</Text>
                                    <Text style={styles.titleCard}>{scheduling.title}</Text>
                                    <Text style={styles.priceCard}>R$ {scheduling.price.toString().replace(/(\d)(\d{2})$/, "$1,$2")}</Text>
                                </View>
                            </View>
                            <Text style={styles.desciptionCard}>{scheduling.description}</Text>

                            <View style={styles.titleMoreInformation}>
                                <Text style={styles.styleTitleData}>Dia</Text>
                                <Text style={styles.styleTitleHour}>Hora</Text> 
                                <Text style={styles.styleTitleNumber}>Telefone</Text>
                            </View>

                            <View style={styles.moreInformation}>
                                <Text style={styles.styleDescription}>{scheduling.date}</Text>
                                <Text style={styles.styleDescription}>{scheduling.hour}</Text> 
                                <Text style={styles.styleDescription}>{scheduling.client_phone.replace(/^(\d{2})(\d{5})/g, "($1) $2-")}</Text>
                            </View>

                            <View style={styles.mapContainer}>
                                <MapView 
                                    initialRegion={{
                                        latitude: Number(scheduling.latitude),
                                        longitude: Number(scheduling.longitude),
                                        latitudeDelta: 0.006,
                                        longitudeDelta: 0.006,
                                    }} 
                                    zoomEnabled={false}
                                    pitchEnabled={false}
                                    scrollEnabled={false}
                                    rotateEnabled={false}
                                    style={styles.mapStyle}
                                >
                                    <Marker 
                                        icon={mapMarker}
                                        coordinate={{ 
                                            latitude: Number(scheduling.latitude),
                                            longitude: Number(scheduling.longitude)
                                        }}
                                    />
                                </MapView>

                                <TouchableOpacity onPress={()=>(Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${scheduling.latitude},${scheduling.longitude}`))} style={styles.routesContainer}>
                                    <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.titleDesciptionAddress}>Endereço</Text>
                            <Text style={styles.desciptionAddress}>{scheduling.address}</Text>

                            <RectButton onPress={()=>(Linking.openURL(`whatsapp://send?phone=${scheduling.client_phone}`))} style={styles.contactButton}>
                                <Ionicons name='logo-whatsapp' size={18} color={'#fff'}  />
                                <Text style={styles.contactButtonText}>Entrar em contato</Text>
                            </RectButton>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}