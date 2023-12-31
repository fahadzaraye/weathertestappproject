import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherDetailScreen from './src/Screens/WeatherDetailScreen';
import WeatherListScreen from './src/Screens/WeatherListScreen';

test('renders Weather Detail Screen', () => {
    render(<WeatherDetailScreen />);
});

test('renders Weather List Screen', () => {
    render(<WeatherListScreen />);
});