import React, { useState ,useEffect} from 'react'
import { View, Text, ActivityIndicator, Platform, Button} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';

import api from '../../services/api';
import styles from './styles';

interface ServiceDetailsRouteParams {
    id: number;
}

interface Service {
    id: number;
    user_id: number;
    user_name: string;
    title: string;
    price: number;
    description: string;
}

export default function DetailsService(){
    const [service, setService] = useState<Service>();
    const [expoPushToken, setExpoPushToken] = useState('');
    
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    const route = useRoute();
    const params = route.params as ServiceDetailsRouteParams;
    const navigation = useNavigation();

    useEffect(() => {
        api.get(`services/service/${params.id}`).then(response => {
            setService(response.data[0])
        })

        handlePushNotification()
            .then(token => setExpoPushToken(token))
            .catch(err => console.log(err))
            
    }, [params.id])

    const onChange = (event: Event, selectedDate: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    function showMode(currentMode: string){
        setShow(true);
        setMode(currentMode);
    };

    function showDatepicker() {
        showMode('date');
    };

    function showTimepicker() {
        showMode('time');
    };
        
    if(!service){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF0E1'}}>
                <ActivityIndicator size="large" color="#999"/>
            </View>
        )
    }

    const {id, user_id} = service
    
    async function handleCreateScheduling(){
        if(date != null){
            await api.post('/scheduling', {date: date.toLocaleString(), service_id:id, gardener_id:user_id})
            
            const message = {
                to: expoPushToken,
                sound: 'default',
                title: 'Agendamento',
                body: `Agendamento Realizado com Sucesso!`,
                data: { someData: 'goes here' },
            };
        
            await fetch('https://exp.host/--/api/v2/push/send', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Accept-encoding': 'gzip, deflate',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });

            navigation.navigate('Options')
        } else {
            alert("Preencha os campos")
        }
    }

    async function handlePushNotification(){
        let token = (await Notifications.getExpoPushTokenAsync()).data
        return token
    }

    const day = `0${date.getDate()}`.slice(-2)
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const year = date.getFullYear()
    let newDate = `${day}/${month}/${year}`

    const hour = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const newHour = `${hour}:${minutes}`
    

    return(
        <View style={styles.container}>
            <RectButton style={styles.backButton} onPress={()=>(navigation.goBack())}>
                <Ionicons name='chevron-back' style={styles.buttonIcon}/>
            </RectButton>

            <View style={styles.headerContainer}>
                <View style={styles.img}></View>
                <Text style={styles.nameGardener}>{service.user_name}</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.titleService}>{service.title}</Text>
                <Text style={styles.priceService}>R$ {service.price.toString().replace(/(\d)(\d{2})$/, "$1,$2")}</Text>
            </View>

            <View >
                <Text style={styles.DescriptionService}>{service.description}</Text>
            </View>
            
            <View style={styles.descriptionContainer}>
                <Text style={styles.titleService}> Escolha o dia: </Text>
                <RectButton style={styles.buttonDate} onPress={showDatepicker}>
                    <Text style={styles.buttonDateText}>{newDate}</Text>
                </RectButton>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.titleService}> Escolha o hora: </Text>
                <RectButton  style={styles.buttonDate} onPress={showTimepicker}>
                    <Text style={styles.buttonDateText}>{newHour}</Text>
                </RectButton>
            </View>


            {show && (
                <DateTimePicker
                    testID="datePicker"
                    minimumDate={new Date()}
                    maximumDate={new Date(2099, 12, 31)}
                    value={date}
                    mode={mode as any}
                    is24Hour={true}
                    display="default"
                    onChange={onChange as any}
                />
            )}
            <RectButton style={styles.button} onPress={handleCreateScheduling}>
                <Text style={styles.buttonText}>Confirmar agendamento</Text>
            </RectButton>
            
        </View>
    )
}