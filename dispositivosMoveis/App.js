import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import Login from "./src/Pages/Login";
import Home from "./src/Pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from "./src/Pages/Detalhes";
import CountryList from "./src/Pages/CountryList";
import CountryDetails from "./src/Pages/CountryDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} backgroundColor={"#000000"} />
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
        <Stack.Screen
          name="CountryList"
          component={CountryList}
          options={{
            headerShown: true,
            title: "Country List",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTitleStyle: {
              color: "#ffffff",
              fontWeight: "600",
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="CountryDetails"
          component={CountryDetails}
          options={{
            headerShown: true,
            title: "Country Details",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTitleStyle: {
              color: "#ffffff",
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
