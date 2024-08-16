import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux';
import { setCategorySelected } from '../fetures/Shop/ShopSlice';

const CategoryItem = ({category, navigation}) => {
    const dispatch = useDispatch();

    const handleNavigate = () => {
        dispatch(setCategorySelected(category))
        navigation.navigate("ItemListCategory", {category});
    }

    return (
        <Card style={styles.cardContainer}>
            <Pressable onPress={handleNavigate}>
                <Text style={styles.text}>{category}</Text>
            </Pressable>
        </Card>
    )
};

export default CategoryItem;

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 15, 
        marginVertical: 15,
        padding: 10,
    }, 
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.White
    }
})