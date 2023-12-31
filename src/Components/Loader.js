import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Animated } from 'react-native';

const Loader = () => {

    var c = new Animated.Value(0);

    const color = c.interpolate({
        inputRange: [0, 100, 200, 300, 400, 500, 700, 800],
        outputRange: ['#2B736F', '#FFF', '#2B736F', '#FFF', '#2B736F', '#FFF', '#2B736F', '#FFF'],
    });

    const handleAnimation = () => {
        Animated.loop(
            Animated.timing(c, {
                toValue: 800,
                duration: 6000,
                useNativeDriver: false
            })
        ).start();
    }

    useEffect(() => {
        handleAnimation();
    }, []);

    return (
        <View style={styles.view}>
            <View style={styles.LoadindBox}>
                <ActivityIndicator size={30} color="#099ff6" />
            </View>
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        zIndex: 9,
        width: '100%',
        position: 'absolute',
        height: '100%',
        backgroundColor: '#00000087',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoadindBox: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        borderRadius: 30,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 1,
    }
});