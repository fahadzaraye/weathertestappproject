import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FontSize } from '../../Utils/Theme';

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#474747'
    },
    contentContainer: {
        width: width - 30,
        alignSelf: 'center',
    },
    noDataText: {
        fontSize: FontSize.xlarge,
        color: 'white',
        alignSelf: 'center',
        marginTop: 40
    }

});
