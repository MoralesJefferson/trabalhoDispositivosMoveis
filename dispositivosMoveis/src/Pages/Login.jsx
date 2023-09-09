import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import Btn from "../Components/Btn";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const onchangetext = (identific, value) => {
    if (identific === "email") {
      setUser({ email: value, password: user.password });
    } else if (identific === "password") {
      setUser({ email: user.email, password: value });
    }
  };
  const dataValidation = () => {
    if (user.email) {
      let email = [...user.email];
      if (email.indexOf("@") === -1) {
        Alert.alert("informe um E-mail '@' válido!!!");
        return false;
      }
    }else{
      Alert.alert("E-mail inválido. não pode ser vazio!!!");
      return false;
    }
    if (user.password) {
      if(user.password.length < 6){
        Alert.alert("Password inválido. minimo 6 caracter!!!");
        return false;
      }      
    }else{
      Alert.alert("Password inválido. não pode ser vazio!!!");
      return false;
    }
    console.log('redirecionar')
  };

  return (
    <View style={styles.login}>
      <TextInput
        style={styles.input}
        value={user.email}
        placeholder="E-mail"
        onChangeText={(value) => onchangetext("email", value)}
      />

      <TextInput
        style={styles.input}
        value={user.password}
        placeholder="Password"
        onChangeText={(value) => onchangetext("password", value)}
        secureTextEntry={true}
      />

      <Btn
        texto="entrar"
        estilo={{ backgroundColor: "#393d96", width: "50%" }}
        func={dataValidation}
      />
    </View>
  );
};

export default Login;
/*<Button style={styles.btn} title="Entrar" onPress={'*'} />*/

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
