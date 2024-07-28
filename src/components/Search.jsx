import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Search = ({onSearch = () => {}, error = '', goBack = () => {}}) => {
    const [keyword, setKeyword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Buscar producto ...'
                    value={keyword}
                    onChangeText={setKeyword}
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
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
        padding: 15
    },
    inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: 6,
        width: "65%",
    },
    input: {
        width: 250,
        marginTop: 10,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.lightGray,
        borderRadius: 10
    },
    errorText: {
        fontFamily: 'Lato',
        fontSize: 14, 
        color: '#FF0000',
        paddingTop: 5
    },
});