import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import axios from "axios";
import PaginationNumbers from "../Components/PaginationNumbers";
import Btn from "../Components/Btn";

const CountryList = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);
  const countriesPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startIndex = (currentPage - 1) * countriesPerPage;
        const endIndex = startIndex + countriesPerPage;
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const paginatedCountries = response.data.slice(startIndex, endIndex);
        setCountries(paginatedCountries);

        if (paginatedCountries.length < countriesPerPage) {
          setIsListEnd(false);
        } else {
          setIsListEnd(true);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const exit = () => {
    navigation.navigate("Login");
  };
  const goBack = () => {
    navigation.navigate("Home");
  };
  const countryDetails = (countryName) => {
    navigation.navigate("CountryDetails", { name: countryName });
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
        <FlatList
          data={countries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.countryCard}>
              <Image source={{ uri: item.flags.png }} style={styles.flag} />
              <Text style={styles.countryName}>{item.name.common}</Text>
              <Text style={styles.capital}>Capital: {item.capital}</Text>
              <Text style={styles.area}>Área: {item.area} km²</Text>
              <Btn
                texto={"Detalhes"}
                func={() => countryDetails(item.name.common)}
                estilo={{
                  backgroundColor: "#000000",
                  marginTop: 10,
                  width: "25%",
                  padding: 5,
                  borderRadius: 13,
                }}
              />
            </View>
          )}
          ListFooterComponent={() => {
            if (isListEnd) {
              return (
                <View style={styles.bot}>
                  <Btn
                    texto={"voltar"}
                    func={handlePrevPage}
                    estilo={{
                      backgroundColor: "#000000",
                      width: "30%",
                      borderRadius: 12,
                    }}
                  />
                  <PaginationNumbers
                    currentPage={currentPage}
                    totalPages={3}
                    onPageChange={currentPage}
                  />
                  <Btn
                    texto={"avançar"}
                    func={handleNextPage}
                    estilo={{
                      backgroundColor: "#000000",
                      width: "30%",
                      borderRadius: 12,
                    }}
                  />
                </View>
              );
            } else {
              return null;
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    flex: 1,
    padding: 16,
  },
  btnNav: {
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 14,
  },
  countryCard: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    flexDirection: "column",
    alignItems: "center",
    elevation: 5,
  },
  flag: {
    width: 100,
    height: 60,
    marginBottom: 8,
  },
  countryName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  capital: {
    fontSize: 16,
    marginBottom: 4,
  },
  area: {
    fontSize: 16,
  },
  bot: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 25,
    marginTop: 15,
    zIndex: 2,
  },
});

export default CountryList;
