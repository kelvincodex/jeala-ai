import {Link} from "react-router-dom";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";
import {useMediaQuery} from "react-responsive";
import MenuIcon from '@/assets/icon/menu-close.svg'

export const DefaultHeader = ()=>{
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    return (
        <nav className={'container-responsive flex justify-between items-center'}>
            <h2 className={'text-[30px] font-semibold '}><Link to={RoutesConstant.page.home}>Jeala AI</Link></h2>
            {
                isTabletOrMobile ?
                    <MenuIcon  className={'w-[32px] h-[32px] cursor-pointer'} /> :
                    <ul className={'flex items-center gap-5 text-[20px] leading-[32px] font-poppins font-light'}>
                        <li><Link to={RoutesConstant.page.home}>Overview</Link></li>
                        <li><Link to={RoutesConstant.page.home}>Resources</Link></li>
                        <li><Link to={RoutesConstant.page.home}>Pricing</Link></li>
                        <li><Link to={RoutesConstant.page.home}>FAQ</Link></li>
                        <li className={'text-primary-100 underline'}><Link to={RoutesConstant.page.home}>Get
                            Started</Link></li>
                    </ul>
            }

        </nav>
    )
}