import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';
import { sizeFont } from './src/assets/responsive';

export const typography = () => {
    const oldTextRender = Text.render;
    Text.render = function (...args) {
        const origin = oldTextRender.call(this, ...args);
        return React.cloneElement(origin, {
            style: [styles.defaultText, origin.props.style],
        });
    };
};

const styles = StyleSheet.create({
    defaultText: {
        fontFamily: 'Poppins-Regular',
        fontSize: sizeFont(3.5),
    },
});
