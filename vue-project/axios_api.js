import axios from "axios";

const axiosRequest = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 30000,
    headers: {
        'Content-Type': 'applications/json'
    }
})

export default axiosRequest;