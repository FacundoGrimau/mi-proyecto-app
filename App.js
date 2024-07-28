// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import Header from './src/components/Header';
import ItemListCategory from './src/screens/ItemListCategory';

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

  return (
    <View style={styles.container}>
      <Header title="Titulo"/>
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected}/>
      ) : (
        <ItemListCategory setCategorySelected={setCategorySelected} categorySelected={categorySelected}/>
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