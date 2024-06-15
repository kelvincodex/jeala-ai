import {Link} from "react-router-dom";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";

export const DefaultHeader = ()=>{
    return (
        <nav className={'container-responsive flex justify-between items-center'}>
            <h2 className={'text-[38.4px] font-semibold'}><Link to={RoutesConstant.page.home}>Jeala AI</Link></h2>
            <ul className={'flex items-center gap-5 text-[24px] leading-[36px] font-poppins font-light'}>
                <li><Link to={RoutesConstant.page.home}>Overview</Link></li>
                <li><Link to={RoutesConstant.page.home}>Resources</Link></li>
                <li><Link to={RoutesConstant.page.home}>Pricing</Link></li>
                <li><Link to={RoutesConstant.page.home}>FAQ</Link></li>
                <li className={'text-primary-100 underline'}><Link to={RoutesConstant.page.home}>Get Started</Link></li>
            </ul>
        </nav>
    )
}