import { Button, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//import allProducts from '../data/products.json'
import { useGetProductByIdQuery } from '../services/shopServices';

const ItemDetail = ({navigation, route}) => {
    const [orientation, setOrientation] = useState('portrait');
    const {width, height} = useWindowDimensions();
    //const [product, setProduct] = useState(null);
    const {productoId: idSelected} = route.params;

    const {data: product} = useGetProductByIdQuery(idSelected);

    useEffect(() => {
        if (width > height) setOrientation('landscape')
            else setOrientation('portrait')
    }, [width, height]);

    /*useEffect(() => {
        const productSelected = allProducts.find((product) => product.id === idSelected)

        setProduct(productSelected);
        }, [idSelected]);*/

    return (
        <View>
            <Button onPress={() => navigation.goBack()} title='Regresar'/>
                {product ? (
                    <View
                        style={ orientation === 'portrait' ? styles.mainContainer : styles.mainContainerLandscape}>
                        <Image
                            style={orientation === 'portrait' ? styles.image : styles.imageLandscape}
                            resizeMode="cover"
                            source={{uri: product.images}}
                        />
                        <View
                            style={orientation === 'portrait' ? styles.textContainer : styles.textContainerLandscape}>
                            <Text>{product.title}</Text>
                            <Text>{product.description}</Text>
                            <Text style={styles.price}>${product.price}</Text>
                            <Button title='Agregar al Carrito'></Button>
                        </View>
                    </View>
                ) : null}
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
    },
    mainContainerLandscape: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
        gap: 10,
    },
    image: {
        width: "100%",
        height: 250,
    },
    imageLandscape: {
        width: "45%",
        height: 200,
    },
    
    textContainer: {
        flexDirection: "column",
    },
    textContainerLandscape: {
        width: "50%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "start",
        gap: 10,
    },
    price: {
        textAlign: "right",
        fontWeight: "bold",
    }
});