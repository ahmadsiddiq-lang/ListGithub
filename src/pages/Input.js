/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../assets/colors';
import { fonts } from '../assets/fonts';
import { hp, SCREEN_WIDTH, wp } from '../assets/responsive';
import ButtonD from '../components/ButtonD';
import Loading from '../components/Loading';
import { hitRepo, hitUser } from '../redux/action/user';

export default function Input({ navigation }) {

    const dispatch = useDispatch();

    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSuccess = useCallback(async (res) => {
        setLoading(false);
        dispatch(hitRepo(username));
        const usernameRes = res.login.toString();
        await AsyncStorage.setItem('username', usernameRes);
        navigation.replace('Home');
    }, [navigation, dispatch, username]);

    const handleError = useCallback(() => {
        setLoading(false);
        ToastAndroid.showWithGravity('Username not found', ToastAndroid.CENTER, ToastAndroid.SHORT);
    }, []);

    const handleBtn = useCallback(() => {
        if (username) {
            setLoading(true);
            dispatch(hitUser(username, handleSuccess, handleError));
        }
    }, [username, dispatch, handleSuccess, handleError]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.bgWhite} barStyle="dark-content" />
            {
                loading &&
                <View style={{
                    position: 'absolute',
                    width: SCREEN_WIDTH,
                    alignItems: 'center',
                    marginTop: hp(35),
                    zIndex: 999,
                }}>
                    <Loading />
                </View>
            }
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    alignItems: 'center',
                }}>
                    <View style={styles.boxImage}>
                        <Image source={require('../assets/images/git.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text>Username :</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={e => setUsername(e)}
                            autoCapitalize="none"
                        />
                        <View style={styles.btn}>
                            <ButtonD
                                onPress={() => handleBtn()}
                            >View</ButtonD>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgWhite,
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    boxImage: {
        width: wp(30),
        height: wp(30),
        marginTop: hp(17),
    },
    content: {
        width: wp(70),
        marginVertical: hp(5),
    },
    input: {
        backgroundColor: colors.bgWhite,
        elevation: 3,
        borderRadius: 5,
        marginTop: hp(2),
        paddingLeft: wp(3),
        fontFamily: fonts.Regular,
    },
    btn: {
        marginTop: hp(5),
    },
});
