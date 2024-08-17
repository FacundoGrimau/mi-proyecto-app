import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SubmitButton = ({onPress, title}) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.darkGray,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        width: "60%",
    },
    text: {
        color: colors.lightBlue,
        fontSize: 22,
    },
});