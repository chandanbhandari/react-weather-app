import * as axios from "axios";

const API_KEY = '351b987f25875e7a011cd5cc5036ddbf';

const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 1;

export function fetchWeather(city){

    const url = `${BASE_URL}&q=${city},India`;
    const request = axios.get(url,{"Access-Control-Allow-Origin": "*"});

    return{
        type:FETCH_WEATHER,
        payload:request
    }
}