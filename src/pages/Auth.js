import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../assets/colors';
import { wp } from '../assets/responsive';
import { hitRepo, hitUser } from '../redux/action/user';

export default function Auth({ navigation }) {

    const dispatch = useDispatch();

    const handleSuccess = useCallback(async () => {
        const username = await AsyncStorage.getItem('username');
        dispatch(hitRepo(username));
        navigation.replace('Home');
    }, [navigation, dispatch]);

    const handleError = useCallback(() => {
        navigation.replace('Input');
    }, [navigation]);

    const CheckUser = useCallback(async () => {
        const username = await AsyncStorage.getItem('username');
        if (username) {
            dispatch(hitUser(username, handleSuccess, handleError));
        } else {
            const x = setTimeout(() => {
                navigation.replace('Input');
                return () => clearTimeout(x);
            }, 2000);
        }
    }, [dispatch, handleSuccess, handleError, navigation]);

    useEffect(() => {
        CheckUser();
    }, [CheckUser]);

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.boxLogo}>
                <Image source={require('../assets/images/logo.png')}
                    style={styles.image}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bgWhite,
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    boxLogo: {
        width: wp(18),
        height: wp(18),
    },
});
