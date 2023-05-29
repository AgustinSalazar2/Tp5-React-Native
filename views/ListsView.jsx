import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import Card from "../components/Card";
import { Searchbar } from "react-native-paper";

const ListsView = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [buscados, setBuscados] = useState([]);

  const imagenDeFondo = {
    uri: "https://static.wikia.nocookie.net/wiki-de-rick-morty/images/f/f7/Rick_y_Morty_Temporada_5.jpg/revision/latest?cb=20220210161441&path-prefix=es",
  };

  const filtrar = (searchQuery) => {
    const nuevoArray = data.filter((elem, i) => {
      const nombre = elem.name && elem.name.toLowerCase();
      if (nombre.includes(searchQuery.toLowerCase())) {
        return elem;
      }
    });
    setBuscados(nuevoArray);
  };

  const onChangeSearch = (query) => {
    // console.log(query)
    setSearch(query);
    if (query) {
      filtrar(query);
    } else {
      setBuscados(data);
    }
  };

  const consumirApi = async (url) => {
    try {
      const resp = await fetch(url);
      const dato = await resp.json();
      //   console.log(dato.results);
      setData(dato.results);
      setBuscados(dato.results);
    } catch (error) {
      console.log("Ocurrio un error: ", error);
    }
  };

  const handleEliminar = (position) => {
    const nuevoArray = buscados.filter((elem, i) => position != i && elem);
    // console.log(nuevoArray)
    setBuscados(nuevoArray);
    // setData(nuevoArray)
  };

  useEffect(() => {
    consumirApi("https://rickandmortyapi.com/api/character");
  }, []);

  return (
    <ImageBackground
      source={imagenDeFondo}
      resizeMode={"cover"}
      style={styles.vista}
    >
      <View style={styles.buscador}>
        <Searchbar
          placeholder="Buscar"
          onChangeText={onChangeSearch}
          value={search}
        />
      </View>

      <FlatList
        data={buscados}
        renderItem={({ item, index }) => (
          <Card
            key={index}
            datos={item}
            posicion={index}
            handleEliminar={handleEliminar}
          />
        )}
      />
    </ImageBackground>
  );
};

export default ListsView;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#7320d4",
    borderRadius: 5,
    alignItems: "center",
  },
  title: {
    color: "black",
    margin: 5,
    padding: 5,
    fontSize: 40,
    alignSelf: "center",
  },
  contenedor: {
    margin: 20,
    padding: 20,
    alignItems: "center",
    backgroundColor: "black",
  },
  buscador: {
    padding: 15,
  },
  vista: {
    flex: 1,
    justifyContent: "center",
  },
});
