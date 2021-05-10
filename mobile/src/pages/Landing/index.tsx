import React from 'react';

import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native'

import styles from './styles';
import landingImg from '../../assets/images/illustration.png';

export default function Landing(){
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>
            <Text style={styles.title}>Gardening</Text>

            <Text style={styles.description}>
                Agende o serviço do jardineiro de sua preferência.
                E se você é um jardineiro, ofereça o seus serviços conosco.
            </Text>

            <View style={styles.containerButtons}>
                <RectButton style={styles.buttonRegister} onPress={()=>(navigation.navigate('Register'))}>
                    <Text style={styles.textRegister}>Registre-se</Text>
                </RectButton>

                <RectButton style={styles.buttonGetIn} onPress={()=>(navigation.navigate('Login'))}>
                    <Text style={styles.textGetIn}>Entrar</Text>
                </RectButton>
            </View> 
        </View>
    )
}