import { StyleSheet, Text, View } from "react-native";

const Btn = ({texto,estilo}) => {
    return (
        <View style={{...styles.btn,...estilo}}>
            <Text style={styles.txt}>{texto}</Text>
        </View>
    );
    
}

export default Btn;
const styles = StyleSheet.create({
btn:{
    padding:10, 
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    },
txt:{
    color:'#ffffff',
    fontWeight:"500",
    fontSize:16
    
}

})