import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Search = ({onSearch = () => {}, goBack = () => {}}) => {
    const [keyword, setKeyword] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Buscar producto ...'
                value={keyword}
                onChangeText={setKeyword}
            />
            <Pressable onPress={() => onSearch(keyword)}>
                <FontAwesome name="search" size={24} color="black"/>
            </Pressable>
            <Pressable onPress={() => setKeyword("")}>
                <FontAwesome6 name="eraser" size={24} color="black"/>
            </Pressable>
            <Pressable onPress={goBack}>
                <AntDesign name="back" size={24} color="black"/>
            </Pressable>
        </View>
    )
    }

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 18,
    },
    input: {
        width: 250,
        marginTop: 10,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.lightGray,
        borderRadius: 10
    },
});