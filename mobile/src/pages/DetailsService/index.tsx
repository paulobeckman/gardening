import React, { useState ,useEffect } from 'react'
import { ScrollView, View, Text, ActivityIndicator} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import api from '../../services/api';
import styles from './styles';

interface ServicesDetailsRouteParams {
    user_id: number;
}

interface Services {
    id: number;
    title: string;
    price: number;
    description: string;
    user_name: string;
}

export default function DetailsService(){
    const navigation = useNavigation();
    const route = useRoute();
    const [services, setServices] = useState<Services[]>();

    const params = route.params as ServicesDetailsRouteParams;

    useEffect(() => {
        api.get(`services/${params.user_id}`).then(response => {
            setServices(response.data)
        })
    }, [params.user_id])


    function handleNextDetailService(id: number) {
        try {
            navigation.navigate('CreateScheduling', {id})
        } catch (error) {   
            console.error(error)            
        }
    }

    if(!services){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#999"/>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <RectButton style={styles.backButton} onPress={()=>(navigation.goBack())}>
                <Ionicons name='chevron-back' style={styles.buttonIcon}/>
            </RectButton>

            <View style={styles.header}>
                <View style={styles.img}></View>
                <Text style={styles.nameGardener}>{services[0].user_name}</Text>
            </View>

            <Text style={styles.title}>Lista de serviços</Text>

            <ScrollView>
                {services.map(service=> {
                    return(
                        <View key={service.id} style={styles.informationService}>
                            <View>
                                <Text style={styles.titleService}>{service.title}</Text>
                                <Text style={styles.DescriptionService}>{service.description}</Text>
                                <Text style={styles.priceService}>R$ {service.price.toString().replace(/(\d)(\d{2})$/, "$1,$2")}</Text>
                            </View>
                            <RectButton onPress={() => (handleNextDetailService(service.id))}>
                                <Text style={styles.buttonDetails}>Agendar</Text>
                            </RectButton>
                        </View>
                    )
                })}

            </ScrollView>
            
        </View>
    )
}