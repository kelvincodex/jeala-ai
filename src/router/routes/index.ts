import React from "react";
import {pageRoute} from "@/router/routes/page-route.ts";
import {authRoute} from "@/router/routes/auth-route.ts";
import {dashboardRoute} from "@/router/routes/dashboard-route.ts";

export type RouteType = {
    path: string,
    component: React.ComponentType,
    options: Options
}
type Options = {
    hasSidebar?: boolean,
}

const initRoute  = ([] as RouteType[]);

export const routes = initRoute.concat(pageRoute, authRoute, dashboardRoute)
