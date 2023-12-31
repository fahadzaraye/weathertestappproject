import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
import { FontSize } from '../Utils/Theme';

const Header = ({ navigation, ...props }) => {

    const { title, allowBack = false, onPressBack, color } = props;

    const handleOnPressBack = () => {
        if (onPressBack) {
            onPressBack();
        }
        else {
            //navigation.pop();
            navigation.goBack();
        }
    }

    return (
        <View style={{ backgroundColor: color, borderBottomWidth: 0.5, borderBottomColor: 'white', marginBottom: 5 }}>
            <View style={styles.HeaderContainer}>
                {allowBack &&
                    <TouchableOpacity onPress={handleOnPressBack} style={styles.HeaderSideLogo}>
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                }
                <View style={styles.HeaderTitle}>
                    <Text style={styles.PageTitle}>{title}</Text>
                </View>
            </View>
        </View>
    );
};

export default Header;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    Container: {
    },
    LogoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderContainer: {
        height: 50,
        width: width,
    },
    HeaderSideLogo: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginHorizontal: 5,
        position: 'absolute',
    },
    PageTitle: {
        color: 'white',
        fontSize: FontSize.xxlarge,
    },
    HeaderTitle: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    backText: {
        color: 'white',
        fontSize: FontSize.large,
    }
});