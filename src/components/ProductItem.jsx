import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import Card from './Card'

const ProductItem = ({product}) => {
    return (
        <Card style={styles.additionalStylesCard}>
            <Text style={styles.textCategory}>{product.title}</Text>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{ uri: product.images[0]}}
            />
        </Card>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    additionalStylesCard: {
        paddingLeft: 10,
        flexDirection: "row",
        height: 120,
        width: 300,
        justifyContent: "space-between",
        margin: 10
    },
    textCategory: {
        color: colors.White,
        fontSize: 15
    },
    image: {
        height: 120,
        width: 100,
        borderRadius: 8,
    },
})