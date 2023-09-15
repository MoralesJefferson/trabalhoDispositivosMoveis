import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Btn from "./Btn";

const PokemonCard = ({ navigation, pokemonData, detalhes }) => {
  const { id, name, img, type } = pokemonData;

  return (
    <View style={styles.card}>
      <View style={styles.data}>
        <LinearGradient
          style={styles.gradient}
          colors={["#BBD4D1", "#BE9D4F"]}
          locations={[0.3, 2.3]}
        >
          <Image source={{ uri: img }} style={{ width: 300, height: 300 }} />
        </LinearGradient>

        <View style={styles.dados}>
          <View>
            <Text style={styles.texto}>
              ID:
              <Text style={styles.textoData}>{id}</Text>
            </Text>
            <Text style={styles.texto}>
              NAME:
              <Text style={styles.textoData}>{name}</Text>
            </Text>
            <Text style={styles.texto}>
              TYPE:
              <Text style={styles.textoData}>{type}</Text>
            </Text>
          </View>
          <Btn
            texto={"detalhes"}
            func={detalhes}
            estilo={{
              backgroundColor: "#393d96",
              marginTop: "auto",
              marginBottom: "auto",
              width: "30%",
              padding: 8,
              borderRadius: 13,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginTop: 10,
  },
  data: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 75,
    borderBottomLeftRadius: 35,
  },

  gradient: {
    borderRadius: 10,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 50,
    marginBottom: 10,
  },
  texto: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 14,
  },
  textoData: {
    fontWeight: "800",
    color: "#393d96",
    fontSize: 18,
  },
  dados: {
    paddingLeft: 10,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PokemonCard;
