import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CartData from '../data/cart.json'
import CartItem from '../components/CartItem';

const Cart = () => {

    const total = CartData.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={CartData}
                renderItem={({item}) => {
                    return <CartItem cartItem={item}/>
                }}
                keyExtractor={(producto) => producto.id}
            />

            <View>
                <Pressable>
                    <Text>Orden Confirmada</Text>
                </Pressable>
                <Text>Total: $ {total}</Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 100
    }
})