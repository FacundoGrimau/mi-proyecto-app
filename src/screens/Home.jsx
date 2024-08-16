import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import CategoryItem from '../components/CategoryItem'
import { colors } from '../global/colors'
import Counter from '../components/Counter'

const Home = ({navigation, route}) => {
    return (
        <View style={styles.flatListContainer}>
            <Counter/>
            <FlatList
                keyExtractor={category => category}
                data={categories}
                renderItem={({item}) => (
                <CategoryItem category={item} navigation={navigation}/>
                )}
            />
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    flatListContainer: {
        width: "100%",
        backgroundColor: colors.lightBlue,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
});