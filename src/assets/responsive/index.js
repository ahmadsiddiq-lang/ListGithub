import { Dimensions } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('screen');

const percentHeight = height / 100;
const percentWidth = width / 100;

export const wp = percent =>
    widthPercentageToDP(percent);

export const hp = percent =>
    heightPercentageToDP(percent);

export const sizeFont = percent =>
    percent * (percentWidth < percentHeight ? percentWidth : percentHeight);

export const imageWidth = () => Math.round((width * 9) / 17.5);
export const imageHeight = () => Math.round((imageWidth() * 9) / 18.5);

//default
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;