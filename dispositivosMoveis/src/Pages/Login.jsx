import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Btn from "../Components/Btn";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const onchangetext = (identific, value) => {
    if (identific === "email") {
      console.log("email");
      setUser({ email: value, password: user.password });
    } else if (identific === "password") {
      console.log("password");
      setUser({ email: user.email, password: value });
    }
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
      <Btn texto='entrar' estilo={{backgroundColor:'#393d96',width:'50%'}}/>
    </View>
  );
};

export default Login;
/*<Button style={styles.btn} title="Entrar" onPress={'*'} />*/

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems:"center",
    justifyContent:"center",
  },
  input:{
    borderWidth:1,
    width:'100%',
    padding:10,
    borderRadius:5,
    marginBottom:10,
  }
  
    
  
});
