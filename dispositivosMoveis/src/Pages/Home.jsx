import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import PokemonCard from "../Components/PokemonCard";
import Btn from "../Components/Btn";
import { LinearGradient } from "expo-linear-gradient";
import PaginationNumbers from "../Components/PaginationNumbers";

const Home = ({ navigation }) => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${
    (currentPage - 1) * 10
  }`;
  const totalPages = 3;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const fetch = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data.results;

      const pokemonUpdate = [];

      for (const pokem of data) {
        const pokemonResponse = await axios.get(pokem.url);

        const pokemonData = {
          id: pokemonResponse.data.id,
          name: pokem.name,
          img: pokemonResponse.data.sprites.other.home.front_default,
          type: pokemonResponse.data.types[0].type.name,
        };

        pokemonUpdate.push(pokemonData);
      }
      setPokemon(pokemonUpdate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [currentPage]);

  const detalhes = (item) => {
    const { id } = item;
    navigation.navigate("Detalhes", { id: id, name: item.name });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.home}>
      <ImageBackground
        source={require("../../assets/homeCard.png")}
        style={styles.headerImage}
      ></ImageBackground>

      <LinearGradient
        style={styles.gradient}
        colors={["#BBD4D1", "#BE9D4F"]}
        locations={[0.3, 2.3]}
      >
        <FlatList
          data={pokemon}
          renderItem={({ item }) => (
            <PokemonCard pokemonData={item} detalhes={() => detalhes(item)} />
          )}
          ListFooterComponent={() => (
            <View style={styles.bot}>
              <Btn
                texto={"voltar"}
                func={prevPage}
                estilo={{
                  backgroundColor: "#000000",
                  width: "30%",
                  borderRadius: 12,
                }}
              />
              <PaginationNumbers
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
              <Btn
                texto={"avançar"}
                func={nextPage}
                estilo={{
                  backgroundColor: "#000000",
                  width: "30%",
                  borderRadius: 12,
                }}
              />
            </View>
          )}
        />
      </LinearGradient>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  gradient: {
    flex: 1,
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
  headerImage: {
    width: "100%",
    height: 117,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
