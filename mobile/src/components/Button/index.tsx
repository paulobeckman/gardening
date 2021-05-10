import React from 'react';
import {Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

export interface ButtonProps {
    title: string;
    onPress: () => (void);
    backgroundColor?: string;

    justifyContent: string;
    color?: string;
    height: number;
}

export const Button: React.FC<ButtonProps> = ({title, onPress, backgroundColor, justifyContent, color, height}) => {

    return(
        <RectButton style={{}} onPress={onPress}>
            <Text style={{color}}>{title}</Text>
        </RectButton>
    )
}   