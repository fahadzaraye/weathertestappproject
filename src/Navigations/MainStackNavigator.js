import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './NavigationRef';

import WeatherListScreen from '../Screens/WeatherListScreen';
import WeatherDetailScreen from '../Screens/WeatherDetailScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="WeatherList" >
                <Stack.Screen name="WeatherList" component={WeatherListScreen} options={{ headerShown: false, animationEnabled: false }} />
                <Stack.Screen name="WeatherDetail" component={WeatherDetailScreen} options={{ headerShown: false, animationEnabled: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStackNavigator;
