import {RouteType} from "@/router/routes/index.ts";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";
import {LoginScreen} from "@/view/page/auth/LoginScreen.tsx";
import {RegisterScreen} from "@/view/page/auth/RegisterScreen.tsx";
import {VerifyEmailAddressScreen} from "@/view/page/auth/VerifyEmailAddressScreen.tsx";

export const authRoute: RouteType[] = [
    {
        path:RoutesConstant.auth.login,
        component: LoginScreen,
        options: {}
    },
    {
        path:RoutesConstant.auth.register,
        component: RegisterScreen,
        options: {}
    },
    {
        path:RoutesConstant.auth.verifyEmailAddress,
        component: VerifyEmailAddressScreen,
        options: {}
    },
]