import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import CommonService from '../../Services/Common/CommonService';
import styles from './style';
import WeatherCard from '../../Components/WeatherCard'
import DropDown from '../../Components/DropDown';
import Loader from '../../Components/Loader';
import Header from '../../Components/Header';

const CitiesData = [
    {
        id: '1',
        name: 'Karachi',
        code: 'PK'
    },
    {
        id: '2',
        name: 'New York',
        code: 'US'

    },
    {
        id: '3',
        name: 'London',
        code: 'CA'

    },
    {
        id: '4',
        name: 'Syndney',
        code: 'AU'

    },
    {
        id: '5',
        name: 'Hong kong',
        code: 'HK'

    },
    {
        id: '6',
        name: 'Seattle',
        code: 'WA'

    },
    {
        id: '7',
        name: 'Nagoya',
        code: 'JP'

    },
    {
        id: '8',
        name: 'Stockholms',
        code: 'SE'

    },
    {
        id: '9',
        name: 'Doha',
        code: 'QA'

    },
    {
        id: '10',
        name: 'Auckland',
        code: 'NZ'

    },
];

const WeatherListScreen = ({ navigation }) => {

    const isFocused = useIsFocused();
    const [selectedCity, setSelectedCity] = useState({
        id: '1',
        name: 'Karachi',
        code: 'PK'
    },)
    const [weatherData, setWeatherData] = useState({});
    const [loadingFlag, setLoadingFlag] = useState(true);


    const getWeather = async (item) => {
        setLoadingFlag(true)
        var response = await CommonService.GetWeather(item);
        if (response.cod == '200') {
            setWeatherData(response)
        } else {
            setWeatherData({})
        }
        setLoadingFlag(false)
    }

    useEffect(() => {
        const onLoad = async () => {
            await getWeather(selectedCity);
        }
        if (isFocused) {
            onLoad();
        }
    }, [isFocused]);

    const handleOnChangeDropdown = (item) => {
        setSelectedCity(item)
        getWeather(item)
    }

    const handleOnPressItem = () => {
        navigation.navigate('WeatherDetail', { data: { weatherData } });
    }

    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={"My places"} color={'#474747'} />

            <View style={styles.contentContainer}>
                <View style={{}}>
                    <DropDown
                        items={CitiesData}
                        displayValue={'name'}
                        value={selectedCity?.name}
                        onSelectItem={handleOnChangeDropdown}
                    />
                    {
                        loadingFlag == true ?
                            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', marginTop: 100 }}>
                                <Loader />
                            </View> :
                            <>
                                {
                                    weatherData?.cod != '200' ?
                                        <Text style={styles.noDataText}>No data found</Text>
                                        :
                                        <WeatherCard item={weatherData} onPressItem={() => handleOnPressItem()} />
                                }</>
                    }
                </View>
            </View>
        </View>
    );
};

export default WeatherListScreen;
