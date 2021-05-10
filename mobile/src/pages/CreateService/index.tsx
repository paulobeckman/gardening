import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

import api from '../../services/api';
import Input from "../../components/input";
import styles from './styles'

export default function CreateService(){
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    async function handleCreateService(){
        if(title != '' && price != '' && description != ''){
            await api.post('/services', {title, price, description})

            navigation.navigate('RegisteredServices')
        } else {
            alert("Preencha os campos")
        }
    }

    return(
        <View style={styles.container}>
            <RectButton style={styles.backButton} onPress={()=>(navigation.goBack())}>
                <Ionicons name='chevron-back' style={styles.buttonIcon}/>
            </RectButton>
            
            <Text style={styles.title}>Vamos cadastrar seus serviços!</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Titulo do serviço"
                value={title}
                onChangeText={setTitle}
            />

            <Input
                style={styles.input}
                value={price}
                mask="price"
                maxLength={12}
                placeholder="Valor do serviço"
                keyboardType="numeric"
                inputMaskChange={(text: string) => setPrice(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Descrição do serviço"
                value={description}
                onChangeText={setDescription}
            />

            <RectButton style={styles.button} onPress={handleCreateService}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </RectButton>
        </View>
    );
}