import axios from "axios"
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = import.meta.env.VITE_WHEATER_API_KEY;
const get = (lat, lon) => {
    console.log('key', api_key);
    const response = axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`);
    return response.then(res => res.data);
}

export default { get }