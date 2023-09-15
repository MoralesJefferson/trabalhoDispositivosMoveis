import { useState } from "react";
import {
  Alert,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Btn from "../Components/Btn";

const Login = ({ navigation }) => {
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
    } else {
      Alert.alert("E-mail inválido. não pode ser vazio!!!");
      return false;
    }
    if (user.password) {
      if (user.password.length < 6) {
        Alert.alert("Password inválido. minimo 6 caracter!!!");
        return false;
      }
    } else {
      Alert.alert("Password inválido. não pode ser vazio!!!");
      return false;
    }
    navigation.navigate("Home");
  };

  return (
    <View style={styles.login}>
      <ImageBackground
        source={require("../../assets/cardLoginP.png")}
        style={styles.headerImage}
      >
        <View style={styles.boxLogin}>
          <TextInput
            style={styles.input}
            value={user.email}
            placeholder="E-mail"
            placeholderTextColor="#ffffff9a"
            onChangeText={(value) => onchangetext("email", value)}
          />

          <TextInput
            style={styles.input}
            value={user.password}
            placeholder="Password"
            placeholderTextColor="#ffffff9a"
            onChangeText={(value) => onchangetext("password", value)}
            secureTextEntry={true}
          />

          <Btn
            texto="entrar"
            estilo={{ backgroundColor: "#222222b4", width: "50%" }}
            func={dataValidation}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  boxLogin: {
    width: "100%",
    height: 200,
    backgroundColor: "#831711ad",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 15,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: "#ffffff",
    fontSize: 16,
    borderColor: "#ffffff9a",
  },
});
