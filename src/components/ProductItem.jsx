import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import Card from './Card'
import { useDispatch } from 'react-redux';
import { setItemSelected } from '../fetures/Shop/ShopSlice';

const ProductItem = ({product, navigation}) => {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(setItemSelected(product.title))
    navigation.navigate("ItemDetail", {productoId: product.id});
  }

  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={handleNavigate}
      >
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: product.images}}
        />
      </Pressable>
    </Card>
  );
};
  
export default ProductItem;
  
const styles = StyleSheet.create({
  additionalStylesCard: {
    flexDirection: "row",
    height: 130,
    width: "100%",
    justifyContent: "space-between",
    margin: 10,
  },
  textCategory: {
    fontSize: 18,
    color: colors.White,
    paddingLeft: 10,
    width: "55%"
  },
  image: {
    height: 120,
    width: "35%",
    marginRight: 25,
    borderRadius: 8,
  },
  pressable : {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10
  }
});