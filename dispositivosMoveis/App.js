import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Login from "./src/Pages/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#ffffff"} />
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: StatusBar.currentHeight,
  },
});
