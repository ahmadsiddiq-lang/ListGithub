/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors } from '../assets/colors';
import { fonts } from '../assets/fonts';
import { hp, sizeFont, wp } from '../assets/responsive';
import ButtonD from '../components/ButtonD';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../redux/action/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
    const dataUser = useSelector(state => state.user.dataUser);

    const dispatch = useDispatch();

    const clearData = useCallback(async () => {
        dispatch(clear());
        await AsyncStorage.clear();
        navigation.replace('Input');
    }, [dispatch, navigation]);

    return (
        <View style={styles.container}>
            <View>
                <TouchableHighlight
                    underlayColor={colors.bgBlack4}
                    style={{ padding: wp(3) }} onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="chevron-back"
                        size={sizeFont(6.8)}
                        color={colors.fontBlack}
                    />
                </TouchableHighlight>
            </View>
            <View style={styles.info}>
                <View style={styles.boxImage}>
                    <Image source={{ uri: dataUser.avatar_url }}
                        style={styles.image}
                    />
                </View>
                <View style={{
                    marginTop: hp(2),
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: sizeFont(5),
                        fontFamily: fonts.Medium,
                    }}>Ahmad Siddiq</Text>
                    <Text>ahmadsiddiq-lang</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp(3),
                }}>
                    <View style={[styles.boxFollow, {
                        marginRight: wp(8),
                    }]}>
                        <Text style={{
                            fontSize: sizeFont(4),
                            color: colors.fontBlack1,
                        }}>followers</Text>
                        <Text style={{
                            fontSize: sizeFont(4.3),
                            fontFamily: fonts.Medium,
                        }}>12</Text>
                    </View>
                    <View style={styles.boxFollow}>
                        <Text style={{
                            fontSize: sizeFont(4),
                            color: colors.fontBlack1,
                        }}>followings</Text>
                        <Text style={{
                            fontSize: sizeFont(4.3),
                            fontFamily: fonts.Medium,
                        }}>12</Text>
                    </View>
                </View>
            </View>
            <View style={{
                marginHorizontal: wp(5),
                marginTop: hp(8),
                flex: 1,
            }}>
                <ButtonD
                    onPress={() => clearData()}
                >Keluar</ButtonD>
            </View>
            <View style={{
                alignItems: 'center',
                paddingBottom: hp(1),
            }}>
                <View style={styles.boxLogo}>
                    <Image source={require('../assets/images/git.png')}
                        style={styles.image}
                    />
                </View>
                <Text>@copyright 2021 | ahmad siddiq</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgWhite,
    },
    info: {
        alignItems: 'center',
        marginTop: hp(10),
    },
    boxFollow: {
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    boxImage: {
        width: wp(25),
        height: wp(25),
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxLogo: {
        width: wp(18),
        height: wp(18),
    },
});
