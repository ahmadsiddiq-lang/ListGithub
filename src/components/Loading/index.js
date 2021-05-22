

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../../assets/colors';

export default function Loading({ styleCustome }) {
    return (
        <ActivityIndicator size="large" style={{
            backgroundColor: colors.mainColor,
            padding: 5,
            borderRadius: 100,
        }} color={colors.fontWhite} {...styleCustome} />
    );
}
