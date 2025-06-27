import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const response = axios.get(baseUrl);
    return response.then(res => res.data);
};
const get = id => {
    const response = axios.get(`${baseUrl}/${id}`);
    return response.then(res => res.data);
};
const post = (newObj) => {
    const response = axios.post(baseUrl, newObj);
    return response.then(res => res.data);
};
const update = (id, newObj) => {
    const response = axios.put(`${baseUrl}/${id}`, newObj);
    return response.then(res => res.data);
};

const deleteHttp = id => {
    const response = axios.delete(`${baseUrl}/${id}`);
    return response.then(res => res.data);
}

export default { getAll, get, post, update, deleteHttp }