import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q='
});

export default Api;