import axios from 'axios'
import { requestsToApi } from './endpoints';

export default async function fetchForLogin(textfield: string, password: string, isEmailLogin: boolean){
    let url: string;
    if(isEmailLogin)
    {
        url = requestsToApi.requestEmailLogin + textfield;
    }
    else
    {
        url = requestsToApi.requestUsernameLogin + textfield; 
    }
    url = url + "?password=" + password;
    return axios.get(url);
}