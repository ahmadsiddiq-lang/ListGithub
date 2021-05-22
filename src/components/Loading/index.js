

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../assets/colors';

export default function Loading({ styleCustome }) {
    return (
        <View>
            <ActivityIndicator size="large" style={{
                backgroundColor: colors.mainColor,
                padding: 5,
                borderRadius: 100,
            }} color={colors.fontWhite} {...styleCustome} />
        </View>
    );
}
