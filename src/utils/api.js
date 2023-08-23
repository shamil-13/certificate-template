import axios from 'axios'

export const axiosGet = (url) => {
    console.log(url,'url')
    let headers = {
            type: 'application/json'
        }
    const config = {
        headers: {
            ...headers
        },
        timeout: 300000, 
    };
    return axios.get(url, config);
};