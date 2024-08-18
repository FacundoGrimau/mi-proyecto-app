import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'

const MyProfile = ({navigation}) => {
    const [image, setImage] = useState(null)
    
    return (
        <View style={styles.container}>
            {image ?
                null:
                <>
                    <Image
                        style={styles.img}
                        resizeMode='cover'
                        source={require("../../assets/user.jpg")}
                    />
                    <Pressable 
                    onPress={() => navigation.navigate("Image Selector")}
                    style={({pressed})=> [styles.btn, {opacity: pressed ? 0.6 : 1}]}
                    >
                        <Text style={{color: "#fff"}}>Add Profile Picture</Text>
                    </Pressable>
                </>
            }
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        height: 200,
        width: 200,
    },
    btn: {
        backgroundColor: colors.darkBlue,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingVertical: 8,
        borderRadius: 5,
    }
})