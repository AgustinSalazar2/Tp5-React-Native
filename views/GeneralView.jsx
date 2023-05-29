
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const GeneralView = ({navigation}) => {
    // const [state, setState] = useState('Hola');
    //const Stack = createNativeStackNavigator();
    const imagenDeFondo = {uri:'https://static.wikia.nocookie.net/wiki-de-rick-morty/images/f/f7/Rick_y_Morty_Temporada_5.jpg/revision/latest?cb=20220210161441&path-prefix=es'};
    //const imagenDeFondo = {uri:'https://www.formulatv.com/images/series/posters/1500/1524/dest_1.jpg'};
  return (
      <ImageBackground source={imagenDeFondo} resizeMode='cover' style={styles.vista}>
        <View>
        {/* Los textos deben ser definidos dentro de un elemento Text */}
        {/* A diferencia de html en donde podiamos agregar texto dentro de un div */}
        {/* <Text>Texto dentro de la vista general</Text> */}

          <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('list')}>
            <Text style={styles.title}>Personajes</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
  )
}

export default GeneralView

const styles = StyleSheet.create({
    container: {
      // margin: 200,
      margin: 80,
      padding: 10,
      backgroundColor: 'green',
      borderRadius: 8,
      alignItems: 'center',
      opacity: 0.90,
    },
    title: {
      color: 'white',
      fontSize: 30
    },
    vista: {
      flex: 1,
      justifyContent: 'center',
      // width: scale(30),
      // height: verticalScale(50),
      // padding: moderateScale(5)
    }
  })