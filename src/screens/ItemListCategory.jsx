import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import products from '../data/products.json'
import Search from '../components/Search'
import { colors } from '../global/colors'
import ProductItem from '../components/ProductItem'
import { useGetProductsByCategoryQuery } from '../services/shopServices'

const ItemListCategory = ({navigation, route}) => {
    const [keyWord, setKeyword] = useState('')
    const [productsFiltered, setProductsFiltered] = useState([])
    const [error, setError] = useState ('')

    const {category: categorySelected} = route.params;

    const {data: productsFetched, error: errorFetched, isLoading} = useGetProductsByCategoryQuery(categorySelected);

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

        /*const productsPreFiltered = products.filter(
            (product) => product.category === categorySelected
        )*/

        if(!isLoading) {
        const productsfilter = productsFetched.filter(
            (product) => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
        )
        setProductsFiltered(productsfilter)
        setError('')
        }

    }, [keyWord, categorySelected, productsFetched, isLoading]);

    return (
        <View>
            <Search
                error={error}
                onSearch={setKeyword}
                goBack={() => navigation.goBack()}
            />
            <FlatList
                data={productsFiltered}
                renderItem={({item}) => <ProductItem product={item} navigation={navigation}/>}
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