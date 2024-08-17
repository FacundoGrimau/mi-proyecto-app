import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../global/colors';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useDispatch } from 'react-redux';

import { useSignUpMutation } from '../services/authService';
import { setUser } from '../fetures/User/UserSlice';

const Signup = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [triggerSignUp, result] = useSignUpMutation()

    const dispatch = useDispatch()

    const onSubmit = () => {
        triggerSignUp({email, password, returnSecureToken: true})
    }

    useEffect(() => {
        if(result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
    }, [result] )

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <InputForm
                    label={"email"}
                    onChange={setEmail}
                    error={errorMail}
                />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirmPassword"}
                    onChange={setConfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send"/>
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Signup

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightBlue,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Lato",
    },
    sub: {
        fontSize: 14,
        fontFamily: "Lato",
        color: "black",
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Lato",
        color: colors.darkBlue,
    },
});