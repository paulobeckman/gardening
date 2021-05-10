import React from "react";
import { Text, TextInput, StyleSheet, TextInputProps} from "react-native";

import { maskCep, maskPhone, maskCurrency, maskPrice } from "../../lib/utils";
import styles from './styles';


interface InputProps extends TextInputProps {
  mask: "cep" | "phone" | "currency" | "price";
  inputMaskChange: any;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
  function handleChange(text: string) {
    if (mask === "cep") {
      const value = maskCep(text);
      inputMaskChange(value);
    }
    if (mask === "phone") {
      const value = maskPhone(text);
      inputMaskChange(value);
    }
    if (mask === "currency") {
      const value = maskCurrency(text);
      inputMaskChange(value);
    }
    if (mask === "price") {
      const value = maskPrice(text);
      inputMaskChange(value);
    }
  }

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange(text)}
        {...rest}
      />
    </>
  );
};

export default Input;