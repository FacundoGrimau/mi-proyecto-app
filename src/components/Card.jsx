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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        },
    });