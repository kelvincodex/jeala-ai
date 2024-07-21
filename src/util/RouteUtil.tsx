import { useNavigate } from "react-router-dom";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";

export const RouteUtil = ()=>{
    const navigate = useNavigate();

    return {
        login: ()=> navigate(RoutesConstant.auth.login),
        register: ()=> navigate(RoutesConstant.auth.register),
        verifyEmailAddress:()=> navigate(RoutesConstant.auth.verifyEmailAddress),
        overview: ()=> navigate(RoutesConstant.dashboard.overview),
    }
}