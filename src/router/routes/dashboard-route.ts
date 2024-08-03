import {RouteType} from "@/router/routes/index.ts";
import {OverviewDashboard} from "@/view/page/dashboard/OverviewDashboard.tsx";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";
import {TestDashboard} from "@/view/page/dashboard/TestDashboard.tsx";

export const dashboardRoute : RouteType[] = [
    {
        path: RoutesConstant.dashboard.overview,
        component: OverviewDashboard,
        options: {hasSidebar: true}
    },
    {
        path: RoutesConstant.dashboard.testDashboard,
        component: TestDashboard,
        options: {hasSidebar: true}
    },
]