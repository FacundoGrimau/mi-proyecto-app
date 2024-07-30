import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import Card from './Card'

const ProductItem = ({ product }) => {
    return (
      <Card style={styles.additionalStylesCard}>
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: product.images}}
        />
      </Card>
    );
  };
  
  export default ProductItem;
  
  const styles = StyleSheet.create({
    additionalStylesCard: {
      paddingLeft: 10,
      flexDirection: "row",
      height: 120,
      width: "100%",
      justifyContent: "space-between",
      margin: 10,
    },
    textCategory: {
      fontSize: 16,
      color: colors.White,
      width: "70%"
    },
    image: {
      height: 120,
      width: "30%",
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