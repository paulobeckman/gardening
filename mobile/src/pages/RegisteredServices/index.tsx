import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, ActivityIndicator} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import api from '../../services/api';
import styles from './styles';
import {useAuth} from '../../contexts/auth'


interface Service {
    id: number;
    title: string;
    price: number;
    description: string;
}

export default function ServicesList(){
    const [services, setServices] = useState<Service[]>([]);
    const { signOut } = useAuth();
    const navigation = useNavigation();

    async function handleLogoutUser(){    
        api.post('/users/logout')
        
        signOut()
    }
    
    useFocusEffect(
        useCallback(() => {
            api.get(`/services/services`).then(response => {
                return setServices(response.data)
            }).catch(error => {
                console.error(error)
            })
        }, [])
    )

    if(!services[0]){
        return(
            <View style={styles.container}>
                <RectButton style={styles.menuButton} >
                    <Ionicons onPress={()=>(navigation.navigate('Users'))} name='menu' style={styles.buttonIcon}/>
                </RectButton>

                <RectButton style={styles.logout} onPress={()=>(handleLogoutUser())}>
                    <Ionicons name='log-out-outline' style={styles.buttonIcon}/>
                </RectButton>

                <RectButton style={styles.button} onPress={()=>(navigation.navigate('CreateService'))}>
                    <Text style={styles.buttonText}>Cadastar novos serviços</Text>
                </RectButton>

                <Text style={styles.title}>Seus serviços cadastrados</Text>
                <View style={styles.constentMensagem}>
                    <Text style={styles.mensagem}>Você não possui serviços cadastrados</Text>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <RectButton style={styles.menuButton} >
                <Ionicons onPress={()=>(navigation.navigate('Users'))} name='menu' style={styles.buttonIcon}/>
            </RectButton>

            <RectButton style={styles.logout} onPress={()=>(handleLogoutUser())}>
                <Ionicons name='log-out-outline' style={styles.buttonIcon}/>
            </RectButton>

            <RectButton style={styles.button} onPress={()=>(navigation.navigate('CreateService'))}>
                <Text style={styles.buttonText}>Cadastar novos serviços</Text>
            </RectButton>

            <Text style={styles.title}>Seus serviços cadastrados</Text>

            <ScrollView >
                {services.map(service => {
                    return(
                        <View key={service.id} style={styles.card}>
                            <View style={styles.cardInformation}>
                                <View style={styles.img}></View>
                                <View style={styles.allDesciptionCard}>
                                    <Text style={styles.titleCard}>{service.title}</Text>
                                    <Text style={styles.desciptionCard}>{service.description}</Text>
                                    <Text style={styles.priceCard}>R$ {service.price.toString().replace(/(\d)(\d{2})$/, "$1,$2")}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}