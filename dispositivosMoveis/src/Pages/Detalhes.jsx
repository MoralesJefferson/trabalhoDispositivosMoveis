import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Btn from "../Components/Btn";

const Detalhes = ({ navigation, route }) => {
  const [unit, setUnit] = useState({
    weight: "",
    height: "",
    hp: "",
    attack: "",
    defense: "",
    img: "",
    type: "",
  });

  const { id, name } = route.params;

  const feth = async () => {
    try {
      const { data  } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setUnit({
        weight: data.weight,
        height: data.height,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        img: data.sprites.other.home.front_default,
        type: data.types[0].type.name,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    feth();
  }, []);
  const exit = () => {
    navigation.navigate("Login");
  };
  const goBack = () => {
    navigation.navigate("Home");
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["#BBD4D1", "#BE9D4F"]}
      locations={[0.3, 2.3]}
    >
      <ImageBackground
        source={require("../../assets/headerCard.png")}
        style={styles.headerImage}
      >
        <View style={styles.btnNav}>
          <Btn
            texto={"Voltar"}
            func={goBack}
            estilo={{
              backgroundColor: "transparent",
              borderRadius: 8,
              width: "17%",
              paddingTop: 1,
              paddingBotton: 3,
            }}
          />

          <Btn
            texto={"Sair"}
            func={exit}
            estilo={{
              backgroundColor: "transparent",
              borderRadius: 8,
              width: "17%",
              padding: 5,
            }}
          />
        </View>
        <View style={styles.headerContent}>
          <View style={styles.subCaixa}>
            <View style={styles.col1}>
              <Text style={styles.txtTitle}>
                Peso:
                <Text style={styles.txtResponse}>{unit.weight / 10} kg</Text>
              </Text>

              <Text style={styles.txtTitle}>
                Altura:
                <Text style={styles.txtResponse}>{unit.height * 10} cm</Text>
              </Text>

              <Text style={styles.txtTitle}>
                Type: <Text style={styles.txtResponse}>{unit.type}</Text>
              </Text>
            </View>

            <View style={styles.col2}>
              <Text style={styles.txtTitle}>
                Hp: <Text style={styles.txtResponse}>{unit.hp}</Text>
              </Text>

              <Text style={styles.txtTitle}>
                Attack: <Text style={styles.txtResponse}>{unit.attack}</Text>
              </Text>

              <Text style={styles.txtTitle}>
                Defense: <Text style={styles.txtResponse}>{unit.defense}</Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        {unit.img ? (
          <Image source={{ uri: unit.img }} style={styles.poke} />
        ) : (
          <></>
        )}
      </View>

      <ImageBackground
        source={require("../../assets/footerCard.png")}
        style={styles.footerImage}
      >
        <Text style={styles.textoNoFooter}>{name}</Text>
      </ImageBackground>
    </LinearGradient>
  );
};

export default Detalhes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    width: "98%",
    position: "absolute",
    bottom: -60,

    borderRadius: 30,
  },
  textoNoHeader: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  btnNav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 46,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  textoNoFooter: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  subCaixa: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 15,
  },
  col1: {
    width: "45%",
    paddingLeft: 9,
    paddingBottom: 10,
    borderRightWidth: 2,
    borderColor: "#6f190c",
  },
  col2: {
    width: "45%",
    paddingLeft: 9,
    paddingBottom: 10,
    paddingLeft: 60,
  },
  txtTitle: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  txtResponse: {
    color: "#6f190c",
    fontSize: 16,
    fontWeight: "700",
  },
  poke: {
    width: "100%",
    height: "80%",
    marginTop: "auto",
    marginBottom: "auto",
    resizeMode: "contain",
  },
});
