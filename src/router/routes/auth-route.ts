import {RouteType} from "@/router/routes/index.ts";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";
import {LoginScreen} from "@/view/page/auth/LoginScreen.tsx";

export const authRoute: RouteType[] = [
    {
        path:RoutesConstant.auth.login,
        component: LoginScreen,
        options: {}
    },
]