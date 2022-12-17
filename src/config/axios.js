import axios from 'axios';
const token = localStorage.getItem('access_token');

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};

if (token)
    headers['Authorization'] = `Bearer ${token}`;


let protocol = window.location.protocol || 'https:';


const baseURL = process.env.NODE_ENV === 'production' ?
`${protocol}//villagedukaan.com/village-dukaan/api/`
: `${protocol}//villagedukaan.com/village-dukaan/api/`;
// const baseURL = process.env.NODE_ENV === 'production' ?
// `${protocol}//dev74.onlinetestingserver.com/village-dukaan/api/`
// : `${protocol}//dev74.onlinetestingserver.com/village-dukaan/api/`;
// http://dev74.onlinetestingserver.com/village-dukaan/api

axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
axios.defaults.baseURL = baseURL;    

const instance = axios.create({
    baseURL: baseURL,
    headers
});

instance.interceptors.request.use((config) => {
    // console.log('we are here in interceptor.');
    // if(config.url.indexOf('notifications/bell') >= 0) return config;
    document.querySelector('.spinner-container').style.display = 'block';
    return config;
}, (error) => {
    document.querySelector('.spinner-container').style.display = 'none';
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
    document.querySelector('.spinner-container').style.display = 'none';
    return response;
}, (error) => {
    document.querySelector('.spinner-container').style.display = 'none';
    return Promise.reject(error);
});


instance.setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.baseURL = baseURL;
}

export default instance;