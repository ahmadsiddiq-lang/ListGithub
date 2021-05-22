import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../assets/colors';
import { hp, wp } from '../assets/responsive';
import ButtonD from '../components/ButtonD';

export default function Input() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.bgWhite} barStyle="dark-content" />
            <View style={styles.boxImage}>
                <Image source={require('../assets/images/git.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.content}>
                <Text>Username :</Text>
                <TextInput
                    style={styles.input}
                />
                <View style={styles.btn}>
                    <ButtonD
                    // onPress={() => navigation.navigate('Profile')}
                    >View</ButtonD>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgWhite,
        alignItems: 'center',
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
        marginTop: hp(5),
    },
    input: {
        backgroundColor: colors.bgWhite,
        elevation: 3,
        borderRadius: 5,
        marginTop: hp(2),
    },
    btn: {
        marginTop: hp(5),
    },
});
