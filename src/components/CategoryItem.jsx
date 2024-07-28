import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryItem = ({category}) => {
    return (
        <>
        <Text style={styles.text}>{category}</Text>
        </>
    )
    }

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 30, 
        marginVertical: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    }, 
    text: {
        fontSize: 20,
    }
})