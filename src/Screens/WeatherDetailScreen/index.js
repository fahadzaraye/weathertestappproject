import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import Header from '../../Components/Header';
import styles from './style';
import Svg, { G, Path, Circle } from 'react-native-svg';


const WeatherDetailScreen = ({ navigation, route }) => {

    const { data } = route.params;
    const [weatherData, setWeatherData] = useState(data.weatherData);


    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={"Detail"} allowBack={true} color={'#099ff6'} />

            <View style={styles.contentContainer}>
                <Text style={styles.cityNameText}>{weatherData?.name}, {weatherData?.sys?.country}</Text>
                <View style={styles.view1}>
                    <Image
                        resizeMode="contain"
                        style={styles.weatherIcon}
                        source={{
                            uri: `http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`,
                        }}
                    />
                    <Text style={styles.degreeText}>{weatherData?.wind?.deg}</Text>
                </View>
                <Text style={styles.conditonText}>{weatherData?.weather[0]?.main}</Text>
                <Text style={styles.text1}>{weatherData?.weather[0]?.description}</Text>
                <Text style={styles.text2}>Feel Like {weatherData?.main?.feels_like}</Text>
                <View style={styles.detailView}>
                    <Text style={styles.detailHeadingText}>Today Detail</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <View style={{ borderRadius: 5, backgroundColor: '#e6f6ff', alignItems: 'center', alignSelf: 'center', padding: 5, marginRight: 10 }}>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle r="8.68207" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.95074 9.01587)" fill="#099ff6" />
                                    <Path d="M8.8928 6.87063C8.80375 6.88347 8.72118 6.92406 8.65651 6.98654L5.09072 10.4097C5.00068 10.4857 4.94596 10.5956 4.93949 10.7131C4.93302 10.8308 4.97531 10.946 5.05649 11.0314C5.13758 11.1169 5.2504 11.165 5.36819 11.1646C5.48609 11.1642 5.59852 11.1153 5.67911 11.0292L8.95072 7.88675L12.2223 11.0292C12.3029 11.1153 12.4153 11.1642 12.5332 11.1646C12.651 11.165 12.7639 11.1169 12.8449 11.0314C12.9261 10.946 12.9684 10.8308 12.9619 10.7131C12.9555 10.5955 12.9008 10.4857 12.8107 10.4097L9.24493 6.98654C9.15121 6.8965 9.02167 6.85382 8.89283 6.87073L8.8928 6.87063Z" fill="white" />
                                </Svg>
                            </View>
                            <View>
                                <Text style={styles.text3}>Feel Like</Text>
                                <Text style={styles.text4}>{weatherData?.main?.feels_like}</Text>
                            </View>
                        </View>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <View style={{ borderRadius: 5, backgroundColor: '#e6f6ff', alignItems: 'center', alignSelf: 'center', padding: 5, marginRight: 10 }}>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle r="8.68207" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.95074 9.01587)" fill="#099ff6" />
                                    <Path d="M8.8928 6.87063C8.80375 6.88347 8.72118 6.92406 8.65651 6.98654L5.09072 10.4097C5.00068 10.4857 4.94596 10.5956 4.93949 10.7131C4.93302 10.8308 4.97531 10.946 5.05649 11.0314C5.13758 11.1169 5.2504 11.165 5.36819 11.1646C5.48609 11.1642 5.59852 11.1153 5.67911 11.0292L8.95072 7.88675L12.2223 11.0292C12.3029 11.1153 12.4153 11.1642 12.5332 11.1646C12.651 11.165 12.7639 11.1169 12.8449 11.0314C12.9261 10.946 12.9684 10.8308 12.9619 10.7131C12.9555 10.5955 12.9008 10.4857 12.8107 10.4097L9.24493 6.98654C9.15121 6.8965 9.02167 6.85382 8.89283 6.87073L8.8928 6.87063Z" fill="white" />
                                </Svg>
                            </View>
                            <View>
                                <Text style={styles.text3}>Wind</Text>
                                <Text style={styles.text4}>{weatherData?.wind?.speed}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <View style={{ borderRadius: 5, backgroundColor: '#e6f6ff', alignItems: 'center', alignSelf: 'center', padding: 5, marginRight: 10 }}>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle r="8.68207" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.95074 9.01587)" fill="#099ff6" />
                                    <Path d="M8.8928 6.87063C8.80375 6.88347 8.72118 6.92406 8.65651 6.98654L5.09072 10.4097C5.00068 10.4857 4.94596 10.5956 4.93949 10.7131C4.93302 10.8308 4.97531 10.946 5.05649 11.0314C5.13758 11.1169 5.2504 11.165 5.36819 11.1646C5.48609 11.1642 5.59852 11.1153 5.67911 11.0292L8.95072 7.88675L12.2223 11.0292C12.3029 11.1153 12.4153 11.1642 12.5332 11.1646C12.651 11.165 12.7639 11.1169 12.8449 11.0314C12.9261 10.946 12.9684 10.8308 12.9619 10.7131C12.9555 10.5955 12.9008 10.4857 12.8107 10.4097L9.24493 6.98654C9.15121 6.8965 9.02167 6.85382 8.89283 6.87073L8.8928 6.87063Z" fill="white" />
                                </Svg>
                            </View>
                            <View>
                                <Text style={styles.text3}>Preciption</Text>
                                <Text style={styles.text4}>30</Text>
                            </View>
                        </View>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <View style={{ borderRadius: 5, backgroundColor: '#e6f6ff', alignItems: 'center', alignSelf: 'center', padding: 5, marginRight: 10 }}>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle r="8.68207" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.95074 9.01587)" fill="#099ff6" />
                                    <Path d="M8.8928 6.87063C8.80375 6.88347 8.72118 6.92406 8.65651 6.98654L5.09072 10.4097C5.00068 10.4857 4.94596 10.5956 4.93949 10.7131C4.93302 10.8308 4.97531 10.946 5.05649 11.0314C5.13758 11.1169 5.2504 11.165 5.36819 11.1646C5.48609 11.1642 5.59852 11.1153 5.67911 11.0292L8.95072 7.88675L12.2223 11.0292C12.3029 11.1153 12.4153 11.1642 12.5332 11.1646C12.651 11.165 12.7639 11.1169 12.8449 11.0314C12.9261 10.946 12.9684 10.8308 12.9619 10.7131C12.9555 10.5955 12.9008 10.4857 12.8107 10.4097L9.24493 6.98654C9.15121 6.8965 9.02167 6.85382 8.89283 6.87073L8.8928 6.87063Z" fill="white" />
                                </Svg>
                            </View>
                            <View>
                                <Text style={styles.text3}>Air Pressure</Text>
                                <Text style={styles.text4}>{weatherData?.main?.pressure}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <View style={{ borderRadius: 5, backgroundColor: '#e6f6ff', alignItems: 'center', alignSelf: 'center', padding: 5, marginRight: 10 }}>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle r="8.68207" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.95074 9.01587)" fill="#099ff6" />
                                    <Path d="M8.8928 6.87063C8.80375 6.88347 8.72118 6.92406 8.65651 6.98654L5.09072 10.4097C5.00068 10.4857 4.94596 10.5956 4.93949 10.7131C4.93302 10.8308 4.97531 10.946 5.05649 11.0314C5.13758 11.1169 5.2504 11.165 5.36819 11.1646C5.48609 11.1642 5.59852 11.1153 5.67911 11.0292L8.95072 7.88675L12.2223 11.0292C12.3029 11.1153 12.4153 11.1642 12.5332 11.1646C12.651 11.165 12.7639 11.1169 12.8449 11.0314C12.9261 10.946 12.9684 10.8308 12.9619 10.7131C12.9555 10.5955 12.9008 10.4857 12.8107 10.4097L9.24493 6.98654C9.15121 6.8965 9.02167 6.85382 8.89283 6.87073L8.8928 6.87063Z" fill="white" />
                                </Svg>
                            </View>
                            <View>
                                <Text style={styles.text3}>Max UV Index</Text>
                                <Text style={styles.text4}>30</Text>
                            </View>
                        </View>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <View style={{ borderRadius: 5, backgroundColor: '#e6f6ff', alignItems: 'center', alignSelf: 'center', padding: 5, marginRight: 10 }}>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle r="8.68207" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.95074 9.01587)" fill="#099ff6" />
                                    <Path d="M8.8928 6.87063C8.80375 6.88347 8.72118 6.92406 8.65651 6.98654L5.09072 10.4097C5.00068 10.4857 4.94596 10.5956 4.93949 10.7131C4.93302 10.8308 4.97531 10.946 5.05649 11.0314C5.13758 11.1169 5.2504 11.165 5.36819 11.1646C5.48609 11.1642 5.59852 11.1153 5.67911 11.0292L8.95072 7.88675L12.2223 11.0292C12.3029 11.1153 12.4153 11.1642 12.5332 11.1646C12.651 11.165 12.7639 11.1169 12.8449 11.0314C12.9261 10.946 12.9684 10.8308 12.9619 10.7131C12.9555 10.5955 12.9008 10.4857 12.8107 10.4097L9.24493 6.98654C9.15121 6.8965 9.02167 6.85382 8.89283 6.87073L8.8928 6.87063Z" fill="white" />
                                </Svg>
                            </View>
                            <View>
                                <Text style={styles.text3}>Air Quility</Text>
                                <Text style={styles.text4}>30</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <View style={{ borderRadius: 5, backgroundColor: '#e6f6ff', alignItems: 'center', alignSelf: 'center', padding: 5, marginRight: 10 }}>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle r="8.68207" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.95074 9.01587)" fill="#099ff6" />
                                    <Path d="M8.8928 6.87063C8.80375 6.88347 8.72118 6.92406 8.65651 6.98654L5.09072 10.4097C5.00068 10.4857 4.94596 10.5956 4.93949 10.7131C4.93302 10.8308 4.97531 10.946 5.05649 11.0314C5.13758 11.1169 5.2504 11.165 5.36819 11.1646C5.48609 11.1642 5.59852 11.1153 5.67911 11.0292L8.95072 7.88675L12.2223 11.0292C12.3029 11.1153 12.4153 11.1642 12.5332 11.1646C12.651 11.165 12.7639 11.1169 12.8449 11.0314C12.9261 10.946 12.9684 10.8308 12.9619 10.7131C12.9555 10.5955 12.9008 10.4857 12.8107 10.4097L9.24493 6.98654C9.15121 6.8965 9.02167 6.85382 8.89283 6.87073L8.8928 6.87063Z" fill="white" />
                                </Svg>
                            </View>
                            <View>
                                <Text style={styles.text3}>Dew point</Text>
                                <Text style={styles.text4}>30</Text>
                            </View>
                        </View>
                        <View style={{ width: '40%', flexDirection: 'row' }}>
                            <View style={{ borderRadius: 5, backgroundColor: '#e6f6ff', alignItems: 'center', alignSelf: 'center', padding: 5, marginRight: 10 }}>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle r="8.68207" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.95074 9.01587)" fill="#099ff6" />
                                    <Path d="M8.8928 6.87063C8.80375 6.88347 8.72118 6.92406 8.65651 6.98654L5.09072 10.4097C5.00068 10.4857 4.94596 10.5956 4.93949 10.7131C4.93302 10.8308 4.97531 10.946 5.05649 11.0314C5.13758 11.1169 5.2504 11.165 5.36819 11.1646C5.48609 11.1642 5.59852 11.1153 5.67911 11.0292L8.95072 7.88675L12.2223 11.0292C12.3029 11.1153 12.4153 11.1642 12.5332 11.1646C12.651 11.165 12.7639 11.1169 12.8449 11.0314C12.9261 10.946 12.9684 10.8308 12.9619 10.7131C12.9555 10.5955 12.9008 10.4857 12.8107 10.4097L9.24493 6.98654C9.15121 6.8965 9.02167 6.85382 8.89283 6.87073L8.8928 6.87063Z" fill="white" />
                                </Svg>
                            </View>
                            <View>
                                <Text style={styles.text3}>Visiblity</Text>
                                <Text style={styles.text4}>30</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default WeatherDetailScreen;
