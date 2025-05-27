import axios from "axios";

const axsiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
});

export default axsiosInstance