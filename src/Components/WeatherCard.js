
import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, I18nManager, TouchableOpacity } from 'react-native';
import { FontSize } from '../Utils/Theme';

const ProfileCard = ({ ...props }) => {

    const { item, onPressItem } = props;

    const handleOnPressItem = () => {
        if (onPressItem) {
            onPressItem()
        }
    }

    return (
        <TouchableOpacity onPress={handleOnPressItem} style={styles.mainView}>
            <View style={styles.view1}>
                <Text style={styles.cityNameText}>{item?.name}, {item?.sys?.country}</Text>
                <Text style={styles.timeText}>{item?.timezone}</Text>

            </View>
            <View style={styles.view2}>
                <Image
                    resizeMode="contain"
                    style={styles.weatherIcon}
                    source={{
                        uri: `http://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`,
                    }}
                />
                <Text style={styles.degreeText}>{item?.wind?.deg}</Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#099ff6',
        marginVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15
    },
    view1: {

    },
    view2: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    weatherIcon: {
        height: 60,
        width: 60,
        marginRight: 5
    },
    cityNameText: {
        fontSize: FontSize.xxlarge,
        color: 'white',
    },
    timeText: {
        fontSize: FontSize.large,
        color: 'white',
        marginTop: 15
    },
    degreeText: {
        fontSize: FontSize.xxxlarge,
        color: 'white'
    },


});

export default ProfileCard;
