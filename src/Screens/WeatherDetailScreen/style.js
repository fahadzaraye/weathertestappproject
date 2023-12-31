import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FontSize } from '../../Utils/Theme';

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#099ff6'
    },
    contentContainer: {
        width: width - 30,
        alignSelf: 'center'
    },
    cityNameText: {
        fontSize: FontSize.xlarge,
        color: 'white',
        paddingVertical: 10,
        fontWeight: '500'
    },
    view1: {
        flexDirection: 'row',
    },
    detailView: {
        marginVertical: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#A3E8FD',
        borderRadius: 5
    },
    weatherIcon: {
        height: 140,
        width: 140,
    },
    degreeText: {
        fontSize: FontSize.degreeLargeFontSize,
        color: 'white',
    },
    conditonText: {
        fontSize: FontSize.xxlarge,
        color: 'white',
        fontWeight: '500'

    },
    text1: {
        fontSize: FontSize.medium,
        color: 'white',
    },
    text2: {
        fontSize: FontSize.medium,
        color: 'white',
    },
    text3: {
        fontSize: FontSize.medium,
        color: 'white',
    },
    text4: {
        fontSize: FontSize.medium,
        color: 'white',
    },
    detailHeadingText: {
        fontSize: FontSize.xxlarge,
        color: 'white',
        fontWeight: '500'

    }



});
