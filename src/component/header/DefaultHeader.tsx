import {Link} from "react-router-dom";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";
import MenuIcon from '@/assets/icon/menu-close.svg'
import CloseIcon from '@/assets/icon/close-md.svg'
import {useEffect, useState} from "react";
import {animate, stagger} from "framer-motion";

export const DefaultHeader = ()=>{
    const [isClose, setIsClose] = useState<boolean>(false)
    const staggerMenuItems = stagger(0.1, { startDelay: 0.10 });

    const hoverClassName = 'hover:border-b hover:text-primary-100 hover:border-b-primary-100  transition-all duration-300'


    useEffect(() => {
        animate(
            "li",
            isClose
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: isClose ? staggerMenuItems : 0,
            }
        );
    }, [isClose, staggerMenuItems]);
    return (
        <nav className={'border-b sticky top-0 bg-white z-50 w-full transition-all duration-300 ease-in-out h-[80px] md:h-[100px] '}>
            <div className={'flex justify-between h-full items-center container-responsive relative'}>
                <h2 className={`md:text-[30px] text-[25px]  font-semibold`}><Link to={RoutesConstant.page.home}>Jeala AI</Link></h2>

                {
                    !isClose ?
                        <MenuIcon onClick={()=> setIsClose(!isClose)} className={'w-[30px] h-[30px] cursor-pointer lg:hidden'}/> :
                        <CloseIcon onClick={()=> setIsClose(!isClose)} className={'w-[30px] h-[30px] cursor-pointer lg:hidden'}/>
                }
                    <ul className={' items-center gap-5 md:text-[20px] text-[18px] leading-[32px] md:hidden lg:flex hidden font-poppins font-light'}>
                        <li className={hoverClassName}><Link to={RoutesConstant.page.home}>Overview</Link></li>
                        <li className={hoverClassName}><Link to={RoutesConstant.page.home}>Resources</Link></li>
                        <li className={hoverClassName}><Link to={RoutesConstant.page.home}>Pricing</Link></li>
                        <li className={hoverClassName}><Link to={RoutesConstant.page.home}>FAQ</Link></li>
                        <li className={'text-primary-100 border-b hover:text-deep-blue-100'}><Link to={RoutesConstant.page.home}>Get
                            Started</Link></li>
                    </ul>
            </div>
            {/*${toggleMenu ? 'left-0' : '-left-[100%]'}*/}
            {/*todo mobile*/}
            <ul className={`lg:hidden text-[20px] pt-10 absolute bg-white top-20 gap-5 pl-14 min-w-full ${isClose ? 'left-0' : '-left-[100%]'} transition-all duration-300  h-svh w-full flex flex-col items-left`}>
                <li className={hoverClassName}><Link to={RoutesConstant.page.home}>Overview</Link></li>
                <li className={hoverClassName}><Link to={RoutesConstant.page.home}>Resources</Link></li>
                <li className={hoverClassName}><Link to={RoutesConstant.page.home}>Pricing</Link></li>
                <li className={hoverClassName}><Link to={RoutesConstant.page.home}>FAQ</Link></li>
                <li className={'text-primary-100'}><Link to={RoutesConstant.page.home}>Get
                    Started</Link></li>
            </ul>
        </nav>
    )
}