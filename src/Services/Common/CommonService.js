import { Platform } from 'react-native';
import RestClient from '../RestClient';

const GetWeather = (item) => {
    return RestClient.Get(`weather?q=${item.name},${item.code}&APPID=1e41b8d087912ff09355d8ac1ec4763d`);
}

export default {
    GetWeather,
};