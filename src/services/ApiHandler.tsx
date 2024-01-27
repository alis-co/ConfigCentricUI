import axios, { AxiosInstance } from "axios";
// import * as tokenService from "./../services/TokenService";

export const baseUrl = "http://localhost:5268";
// export const baseUrl = process.env.REACT_APP_BASE_URL;

export const api = (): AxiosInstance => {
    const defaultOptions = {
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json",
        },
    };

    let instance = axios.create(defaultOptions);

    // Set the AUTH token for any request
    instance.interceptors.request.use((request: any) => {
        // const token = tokenService.getToken();
        // request.headers.Authorization = token ? `Bearer ${token}` : "";
        return request;
    });

    return instance;
};
