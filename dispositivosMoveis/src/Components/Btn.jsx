import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Btn = ({ texto, estilo, func }) => {
  return (
    <TouchableOpacity style={[styles.btn, estilo]} onPress={func} >
      <Text style={styles.txt}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 16,
  },
});
