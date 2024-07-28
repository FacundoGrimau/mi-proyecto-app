import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors'

const CategoryItem = ({category, selectCategory = () => {}}) => {
    return (
        <Card style={styles.cardContainer}>
            <Pressable onPress={() => selectCategory(category)}>
                <Text style={styles.text}>{category}</Text>
            </Pressable>
        </Card>
    )
    }

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 15, 
        marginVertical: 15,
        padding: 10,
    }, 
    text: {
        fontSize: 20,
        color: colors.White
    }
})