import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://imcon.org.ng/api', // Your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// No need to set an httpsAgent in React Native
// Just use the default axios instance

export default axiosInstance;
