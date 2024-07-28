import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
    }

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBlue,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Lato',
        fontSize: 30,
        margin: 10,
        color: colors.White,
        justifyContent: 'center',
        alignItems: 'center'
    }
})