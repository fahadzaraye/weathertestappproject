import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const scale = width / 320;

const normalize = (size) => {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
}

const FontSize = {
    xxsmall: normalize(8),
    xsmall: normalize(9),
    small: normalize(10),
    regular: normalize(11),
    medium: normalize(12),
    large: normalize(14),
    xlarge: normalize(16),
    xxlarge: normalize(18),
    xxxlarge: normalize(30),
    degreeLargeFontSize: normalize(60),

};

export { FontSize };