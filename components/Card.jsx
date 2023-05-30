import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';


const Card = ({ datos, posicion, handleEliminar }) => {
  // console.log(datos)
  return (
    <View style={styles.contenedor}>

      <View>
        <Text style={styles.title}>{datos.name}</Text>
      </View>

      <Image
        style={styles.logo}
        source={{
          uri: datos.image,
        }}
      />

      <TouchableOpacity
        style={styles.container}
        onPress={() => handleEliminar(posicion)}
      >
        {/* <Icon name="trash" size={20} color="white" /> */}
        <Text style={styles.boton}><Icon name="trash" size={30} color="white" />  Eliminar</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
    alignItems: "center",
  },
  contenedor: {
    margin: 45,
    padding: 5,
    alignItems: "center",
    backgroundColor: "#58FA58",
    borderRadius: 15,
    opacity: 0.85,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: 'bold'
  },
  boton: {
    color: "#ffffff",
    fontSize: 20
  },
  logo: {
    // width: 350,
    // height: 300,
    width: 250,
    height: 200,
    borderRadius: 150,
    margin: 10,
    opacity: 1,
  },
});
