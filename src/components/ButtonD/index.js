import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors as Color } from '../../assets/colors';
import { fonts } from '../../assets/fonts';
import { hp, sizeFont, wp } from '../../assets/responsive';

export default function ButtonD({ children, color = Color.mainColor, textColor = Color.fontWhite, onPress, borderRadius = 5 }) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View style={styles.container(color, borderRadius)}>
                <Text style={styles.text(textColor)}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: (color, borderRadius) => ({
        paddingVertical: hp(1),
        backgroundColor: color,
        borderRadius,
        paddingHorizontal: wp(5),
    }),
    text: (textColor) => ({
        fontSize: sizeFont(3.8),
        color: textColor,
        textAlign: 'center',
        fontFamily: fonts.Medium,
    }),
});
