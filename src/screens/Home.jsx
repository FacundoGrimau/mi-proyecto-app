import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <View style={{width: '100%'}}>
      <Header title={Categorias}/>
      <Categories/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})