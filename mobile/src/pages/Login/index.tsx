import React, {useState} from 'react';
import { Link } from '@react-navigation/native'
import {View, Text, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';


import api from '../../services/api';
import styles from './styles'
import {useAuth} from '../../contexts/auth'


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { signIn } = useAuth();
    const navigation = useNavigation();
    
    async function handleLoginUser(){
        if(email != '' && password != ''){
            const response = await api.post('/users/login', {email, password})
            if(response.data.error){
                return alert(`${response.data.error}`)
            } else {
                signIn()
            }
        } else {
            alert("Preencha os campos")
        }
    }

    return(
        <View style={styles.container}>
            <RectButton style={styles.backButton} onPress={()=>(navigation.goBack())}>
                <Ionicons name='chevron-back' style={styles.buttonIcon}/>
            </RectButton>

            <Text style={styles.title}>Vamos fazer o seu login!</Text>
            <Text style={styles.titleSecondary}>bem vindo de volta , sentimos sua falta</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Digite o seu email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite o sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <Link to='/Register' style={styles.containerDescriptionLogin}>
                <Text style={styles.descriptionLogin}>Não possui uma conta? </Text>
                <Text style={styles.descriptionLoginSecondary}>Registre-se</Text>
            </Link>

            <RectButton style={styles.button} onPress={handleLoginUser}>
                <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
        </View>
    );
}