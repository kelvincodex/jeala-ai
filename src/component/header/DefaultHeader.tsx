import {Link} from "react-router-dom";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";
import MenuIcon from '@/assets/icon/menu-close.svg'

export const DefaultHeader = ()=>{


    return (
        <nav className={'border-b sticky top-0 bg-white z-50 w-full transition-all duration-300 ease-in-out h-[80px] md:h-[100px] '}>
            <div className={'flex justify-between h-full items-center container-responsive'}>
                <h2 className={`md:text-[30px] text-[25px]  font-semibold`}><Link to={RoutesConstant.page.home}>Jeala AI</Link></h2>
                    <MenuIcon className={'w-[30px] h-[30px] cursor-pointer lg:hidden'}/>
                    <ul className={' items-center gap-5 text-[20px] leading-[32px] md:hidden lg:flex hidden font-poppins font-light'}>
                        <li><Link to={RoutesConstant.page.home}>Overview</Link></li>
                        <li><Link to={RoutesConstant.page.home}>Resources</Link></li>
                        <li><Link to={RoutesConstant.page.home}>Pricing</Link></li>
                        <li><Link to={RoutesConstant.page.home}>FAQ</Link></li>
                        <li className={'text-primary-100 underline'}><Link to={RoutesConstant.page.home}>Get
                            Started</Link></li>
                    </ul>
            </div>
        </nav>
    )
}