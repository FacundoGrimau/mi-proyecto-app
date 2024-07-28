import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import products from '../data/products.json'
import Search from '../components/Search'
import { colors } from '../global/colors'
import ProductItem from '../components/ProductItem'

const ItemListCategory = ({categorySelected = "", setCategorySelected = () => {}}) => {
    const [keyWord, setKeyword] = useState('')
    const [productsFiltered, setProductsFiltered] = useState([])
    const [error, setError] = useState ('')

    console.log(categorySelected);

    useEffect(() => {
        const regex= /\d/
        const Digits = (regex.test(keyWord))
        console.log(Digits);

        if (Digits) {
            setError("No ingresar digitos")
            return
        }

        const productsPreFiltered = products.filter(
            (product) => product.category === categorySelected
        )

        const productsfilter = productsPreFiltered.filter(
            (product) => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
        )
        console.log(productsfilter);
        setProductsFiltered(productsfilter)
    
    }, [keyWord, categorySelected])

    return (
        <View>
            <Search
                onSearch={setKeyword}
                goBack={() => setCategorySelected("")}
            />
            <Text>{error}</Text>
            <FlatList
                data={productsFiltered}
                renderItem={({item}) => <ProductItem product={item}/>}
                keyExtractor={(producto) => producto.id}
            />
        </View>
    )
}

export default ItemListCategory

const styles = StyleSheet.create({
    flatListContainer: {
        width: "100%",
        backgroundColor: colors.darkGray,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
});