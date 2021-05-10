import React, { useState ,useEffect } from 'react'
import {Text, ScrollView, View, Linking} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';
import styles from './styles'


interface Schedules {
    id: number;
    date: any;
    hour: string;
    gardener_name: string;
    gardener_phone: string;
    title: string;
    description: string;
    price: string;
}

export default function ScheduledServices(){
    const [schedules, setSchedules] = useState<Schedules[]>([])

    useFocusEffect(() => {
        api.get(`/scheduling`).then(response => {
            setSchedules(response.data)
        })
    })

    if(!schedules[0]){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Veja os serviços que você agendou</Text>
                <View style={styles.constentMensagem}>
                    <Text style={styles.mensagem}>Você não realizou nenhum agendamento</Text>
                </View>
            </View>
        )
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Veja os serviços que você agendou</Text>

            <ScrollView>
                {schedules.map(scheduling => {
                    return(
                        <View key={scheduling.id} style={styles.card}>
                            <View style={styles.cardInformation}>
                                <View style={styles.img}></View>
                                <View style={styles.allDesciptionCard}>
                                    <Text style={styles.nameCard}>{scheduling.gardener_name}</Text>
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
                                <Text style={styles.styleDescription}>{scheduling.gardener_phone.replace(/^(\d{2})(\d{5})/g, "($1) $2-")}</Text>
                            </View>

                            <RectButton onPress={()=>(Linking.openURL(`whatsapp://send?phone=${scheduling.gardener_phone}`))} style={styles.contactButton}>
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