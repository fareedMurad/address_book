import axios from 'axios';

//setup axios base url
const baseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/"

axios.interceptors.response.use(undefined, (error) => {
    const errors = error?.response?.data;
    throw errors;
});

//extract response payload
const responseData = (response) => response.data;

const requestHeaders = () => {

    let headers = {}
    headers['Accept'] = 'application/json';
    return {
        headers
    };
}

//http requests facade
const requests = {
    get: (url) => axios.get(url, requestHeaders()).then(responseData),
    post: (url, object) => axios.post(url, object, requestHeaders()).then(responseData),
}

export const address = {
    getList: (params) => requests.get(`${baseUrl}addresses`, params),
    create: (params) => requests.post(`${baseUrl}addresses`, params),
}