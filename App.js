import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import GeneralView from './views/GeneralView';
import ListsView from './views/ListsView';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={GeneralView}/>
          <Stack.Screen name="list" component={ListsView}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName='Home'>
    //       <Stack.Screen name="General View" component={GeneralView}/>
    //       <Stack.Screen name="list" component={ListsView}/>
    //     </Stack.Navigator>
    //   </NavigationContainer>
    //   <StatusBar style="auto" />
    // </View>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
