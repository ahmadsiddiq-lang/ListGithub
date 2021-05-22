import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors } from '../assets/colors';
import { wp } from '../assets/responsive';

export default function Auth({ navigation }) {
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
