import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import Header from './src/components/Header';
import ItemListCategory from './src/screens/ItemListCategory';
import ItemDetail from './src/screens/ItemDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Lato': require('./assets/Lato-BoldItalic.ttf')
  })

  if (!fontsLoaded && !fontError) {
    return null;
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={({route})=> ({
            header: ( )=> {
              return (
                <Header title={
                  route.name === 'Home'
                  ? 'Categorias'
                  : route.name === 'ItemListCategory'
                  ? route.params.category
                  : 'Detalle del Producto'
                }/>
              )
            }
          })}
          >
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='ItemListCategory' component={ItemListCategory}/>
          <Stack.Screen name='ItemDetail' component={ItemDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
  },
});