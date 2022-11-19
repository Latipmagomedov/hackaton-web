import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.mapbox.com',
});

api.interceptors.request.use(
    async (config) => {
        config.headers["Content-Type"] = "application/json";

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
