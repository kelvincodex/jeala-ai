import axios from "axios";
import {setupCache} from "axios-cache-adapter";
import {GetThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {ThunkApiConfig} from "@/util/type/StoreTypes.ts";
import {RootState} from "@/store";
import {appConfig} from "../../config/app.config.ts";

const cache = setupCache({
    maxAge: 15 * 60 * 1000,
})

const ApiClient = (others: GetThunkAPI<ThunkApiConfig>) => {
    const token = (others.getState() as RootState).auth.token
    //axiosInstance
    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_APP_ENV == 'dev' ?  appConfig.baseUrlDev : appConfig.baseUrlProd,
        withCredentials: false,
        adapter: cache.adapter,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })

    //interceptors request
    axiosInstance.interceptors.request.use(function (config) {
        config.headers.Authorization =  `${token}`
        console.log("Headers ===> ", config.headers)
        console.log("Url ===> ", config.baseURL + config.url)
        console.log("Request ===> ", config.data)
        return config;
    }, function (error) {
        console.log("Request Error ===> ",error.response.data)
        return Promise.reject(error);
    });

    //interceptors response
    axiosInstance.interceptors.response.use((response)=>{
        console.log("Response ===> ",response.data)
        return response
    },(error)=>{
        console.log("Response Error ===> ",error.response.data)
        return Promise.reject(error)
    })
    return axiosInstance
}


export const BaseService = {
    appClient: ApiClient,
}