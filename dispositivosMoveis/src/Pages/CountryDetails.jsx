import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";
import Btn from "../Components/Btn";

const CountryDetails = ({ navigation, route }) => {
  const { name } = route.params;

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const countryInfo = response.data[0];
        setCountryData(countryInfo);
      } catch (error) {
        console.error("Erro ao buscar detalhes do país:", error);
      }
    };

    fetchCountryDetails();
  }, [name]);

  if (!countryData) {
    return (
      <View style={styles.container}>
        <Text>Carregando detalhes do país...</Text>
      </View>
    );
  }
  const goBack = () => {
    navigation.navigate("CountryList");
  };
  const exit = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnNav}>
        <Btn
          texto={"Voltar"}
          func={goBack}
          estilo={{
            backgroundColor: "#000000",
            width: "17",
            borderRadius: 12,
          }}
        />
        <Btn
          texto={"Sair"}
          func={exit}
          estilo={{
            backgroundColor: "#000000",
            width: "17%",
            borderRadius: 12,
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Image source={{ uri: countryData.flags.png }} style={styles.flag} />
        <Text style={styles.countryName}>{countryData.name.official}</Text>
        <Text style={styles.txt}>Região: {countryData.region || "N/A"}</Text>
        <Text style={styles.txt}>
          Subregião: {countryData.subregion || "N/A"}
        </Text>
        <Text style={styles.txt}>
          Área: {countryData.area ? `${countryData.area} km²` : "N/A"}
        </Text>
        <Text style={styles.txt}>
          População: {countryData.population || "N/A"}
        </Text>
        <Text style={styles.txt}>Capital: {countryData.capital || "N/A"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    width: 370,
    height: 200,
    marginBottom: 8,
  },
  countryName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  txt: {
    fontSize: 16,
    fontWeight: "600",
  },
  btnNav: {
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
  },
});

export default CountryDetails;
