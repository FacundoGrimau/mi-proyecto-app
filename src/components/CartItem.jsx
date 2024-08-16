import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../global/colors';

const CartItem = ({cartItem}) => {
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {cartItem.title} x{cartItem.quantity}
                </Text>
                <Text style={styles.text2}>
                    ${cartItem.price}
                </Text>
                <FontAwesome name="trash" size={24} color="black" />
            </View>
        </View>
    )
    }

export default CartItem

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.lightBlue,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Lato",
        fontSize: 19,
        color: colors.darkBlue,
    },
    text2: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "bold",
        color: colors.darkBlue,
    },
});