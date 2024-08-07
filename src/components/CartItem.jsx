import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const CartItem = ({cartItem}) => {
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {cartItem.title} {cartItem.quantity}
                </Text>
                <Text>
                    {cartItem.wast}
                </Text>
                <Text>
                    {cartItem.price}
                </Text>
                <FontAwesome name="trash" size={24} color="black" />
            </View>
        </View>
    )
    }

export default CartItem

const styles = StyleSheet.create({})