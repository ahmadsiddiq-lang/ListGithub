// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Auth from '../pages/Auth';
import Input from '../pages/Input';

const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Input" headerMode="none">
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="Input" component={Input} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;
