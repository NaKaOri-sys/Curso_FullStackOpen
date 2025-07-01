import axios from "axios";

const urlBase = 'https://studies.cs.helsinki.fi/restcountries/api/';
const getAll = () => {
    const response = axios.get(`${urlBase}all`);
    return response.then(res => res.data);
}

const get = name => {
    const response = axios.get(`${urlBase}name/${name}`);
    return response.then(res => res.data);
}

export default {getAll, get};