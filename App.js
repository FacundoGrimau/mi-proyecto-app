// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import Header from './src/components/Header';
import ItemListCategory from './src/screens/ItemListCategory';
import ItemDetail from './src/screens/ItemDetail';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Lato': require('./assets/Lato-BoldItalic.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const [categorySelected, setCategorySelected] = useState('')
  const [itemIdSelected, setItemIdSelected] = useState('')

  return (
    <View style={styles.container}>
      <Header title="Titulo"/>
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected}/>
      ) : !itemIdSelected ? (
        <ItemListCategory 
          setCategorySelected={setCategorySelected}
          categorySelected={categorySelected}
          setItemIdSelected={setItemIdSelected}
        />
      ) : (
        <ItemDetail
          idSelected={itemIdSelected}
          setProductSelected={setItemIdSelected}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    marginTop: 50,
    alignItems: 'center',
  },
});