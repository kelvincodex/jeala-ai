import {RouteType} from "@/router/routes/index.ts";
import {OverviewDashboard} from "@/view/page/dashboard/OverviewDashboard.tsx";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";

export const dashboardRoute : RouteType[] = [
    {
        path: RoutesConstant.dashboard.overview,
        component: OverviewDashboard,
        options: {hasSidebar: true}
    }
]