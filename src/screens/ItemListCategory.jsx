import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import products from '../data/products.json'
import Search from '../components/Search'
import { colors } from '../global/colors'
import ProductItem from '../components/ProductItem'

const ItemListCategory = ({categorySelected = "", setCategorySelected = () => {}, setItemIdSelected = () => {}}) => {
    const [keyWord, setKeyword] = useState('')
    const [productsFiltered, setProductsFiltered] = useState([])
    const [error, setError] = useState ('')

    console.log(categorySelected);

    useEffect(() => {
        const regexDigits= /\d/;
        const hasDigits = (regexDigits.test(keyWord));
        if (hasDigits) {
            setError("¡ No ingresar digitos !")
            return;
        }

        const regexThreeOrMoreCharacters = /[a-zA-Z]{3,}/;
        const hasThreeOrMoreCharacters = (regexThreeOrMoreCharacters.test(keyWord));
        if (!hasThreeOrMoreCharacters && keyWord.length) {
            setError("¡ Ingresar tres o mas caracteres !")
            return;
        }

        console.log(error);

        const productsPreFiltered = products.filter(
            (product) => product.category === categorySelected
        )

        const productsfilter = productsPreFiltered.filter(
            (product) => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
        )
        console.log(productsfilter);
        setProductsFiltered(productsfilter)
        setError('')
    }, [keyWord, categorySelected])

    return (
        <View>
            <Search
                error={error}
                onSearch={setKeyword}
                goBack={() => setCategorySelected("")}
            />
            <FlatList
                data={productsFiltered}
                renderItem={({item}) => <ProductItem product={item} setItemIdSelected={setItemIdSelected}/>}
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