import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Card = ({children, style}) => {
    return (
        <View style={{...styles.container,...style}}>
            {children}
        </View>
    )
    }

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        width: 250,
        height: 50,
        shadowColor: colors.darkGray,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.40,
        shadowRadius: 5.19,
        elevation: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});