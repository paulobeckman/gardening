import React, { useState } from 'react';
import { ScrollView, Text, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import Input from "../../components/input";
import styles from './styles'

export default function Login(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const navigation = useNavigation();

    function handleCreateRegister(){
        if(email != '' && password != '' && password != '' && passwordRepeat != '' && cep != '' && address != '' && phone != ''){
            navigation.navigate('SelectMapPosition', {name, email, password, passwordRepeat, cep, address, phone});
        
        }else {
            alert("Preencha os campos")
        }
    }

    return(
        <ScrollView style={styles.container}>
            <RectButton style={styles.backButton} onPress={()=>(navigation.goBack())}>
                <Ionicons name='chevron-back' style={styles.buttonIcon}/>
            </RectButton>

            <Text style={styles.title}>Vamos fazer o seu cadastro!</Text>
            <Text style={styles.titleSecondary}>bem vindo!  É um prazer te conhecer</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu nome completo"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Crie uma senha"
                value={password}
                onChangeText={setPassword}
            />

            <TextInput
                style={styles.input}
                placeholder="Repita a sua senha"
                value={passwordRepeat}
                onChangeText={setPasswordRepeat}
            />

            <Input
                style={styles.input}
                value={cep}
                mask="cep"
                maxLength={9}
                placeholder="Digite o CEP"
                keyboardType="numeric"
                inputMaskChange={(text: string) => setCep(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu endereço"
                value={address}
                onChangeText={setAddress}
            />

            <Input
                style={styles.input}
                value={phone}
                mask="phone"
                maxLength={15}
                placeholder="Digite o telefone"
                keyboardType="numeric"
                inputMaskChange={(text: string) => setPhone(text)}
            />

            <RectButton style={styles.button} onPress={handleCreateRegister}>
                <Text style={styles.buttonText}>Adicionar Localização</Text>
            </RectButton>
        </ScrollView>
    );
}