import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Login from "./src/Pages/Login";
import Home from "./src/Pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from "./src/Pages/Detalhes";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} backgroundColor={"#6a100f"} />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            title: "Login",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#393d96",
              fontWeight: "600",
              fontSize: 25,
            },
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            title: "Home",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#393d96",
              fontWeight: "600",
              fontSize: 25,
            },
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            headerShown: false,
            title: "Detalhes",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#393d96",
              fontWeight: "600",
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    padding: StatusBar.currentHeight,
  },
});
