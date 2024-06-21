import {BaseService} from "./BaseService.ts";
import {LoginRequest} from "../model/request/auth/LoginRequest.ts";
import {GetThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {ThunkApiConfig} from "@/util/type/StoreTypes.ts";


export class AuthService {
    static login = (data: LoginRequest, others:  GetThunkAPI<ThunkApiConfig>)=>{
        return BaseService.appClient(others).post("/auth/login", data)
    }
}