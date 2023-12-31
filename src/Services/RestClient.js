import axios from 'axios';
import { BaseURL } from '../Utils/Constant';

const Get = async (host) => {
    console.log(`${BaseURL}${host}`)
    return axios.get(`${BaseURL}${host}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
}


export default { Get }