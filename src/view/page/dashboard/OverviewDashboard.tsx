import {Link} from "react-router-dom";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";

export const OverviewDashboard = ()=>{

    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col items-start justify-center">
                {/* Page content here */}
                <label htmlFor="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <li><Link to={RoutesConstant.dashboard.overview}>Sidebar Item 1</Link></li>
                </ul>
            </div>
        </div>
    )
}