// import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import Header from './src/components/Header';
import ItemListCategory from './src/screens/ItemListCategory';
import ItemDetail from './src/screens/ItemDetail';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [itemIdSelected, setItemIdSelected] = useState('')

  const [fontsLoaded, fontError] = useFonts({
    'Lato': require('./assets/Lato-BoldItalic.ttf')
  })

  if (!fontsLoaded && !fontError) {
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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