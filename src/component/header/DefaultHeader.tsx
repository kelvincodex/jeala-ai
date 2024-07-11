import {Link} from "react-router-dom";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";
import MenuIcon from '@/assets/icon/menu-close.svg'
import CloseIcon from '@/assets/icon/close-md.svg'
import MoonIcon from '@/assets/icon/moon.svg'
import SunIcon from '@/assets/icon/sun.svg'
import {useEffect, useState} from "react";
import {animate, motion, stagger} from "framer-motion";
import {importsUtil} from "@/util/importsUtil.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {theme} from "@/store/module/theme.ts";
import {DefaultMenuItem} from "@/component/header/DefaultMenuItem.tsx";

export const DefaultHeader = ()=>{
    const [isClose, setIsClose] = useState<boolean>(false)
    const staggerMenuItems = stagger(0.1, { startDelay: 0.10 });
    const themeState = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();
    // const hoverClassName = 'hover:border-b hover:text-primary-100 hover:border-b-primary-100  transition-all duration-300'
    const hoverClassName = ""
    function themeChange(){
        if (themeState.theme == "light"){
            dispatch(theme.mutation.updateTheme("dark"))
        }else {
            dispatch(theme.mutation.updateTheme("light"))
        }

    }

    useEffect(() => {
        animate(
            ".mobile-lg",
            isClose
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0,
                delay: isClose ? staggerMenuItems : 0,
            }
        );
    }, [isClose, staggerMenuItems]);


    function toggle(){
        setIsClose(!isClose)
    }


    function handleNavigation(){
        setIsClose(false)
    }

    return (
        <nav className={`shadow sticky top-0 z-[999999] w-full transition-all duration-300 ease-in-out h-[80px] md:h-[100px] ${themeState.theme == 'light' ? 'bg-white' : 'bg-dark-400'}`}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ease:'easeOut', duration: 1, delay: 0}}

                className={'flex justify-between h-full items-center container-responsive relative'}>

                <div className={'h-full overflow-hidden absolute -left-28'}>
                    <img
                        className={' md:w-[400px] w-[100px] h-[200px]  object-bottom'}
                        src={importsUtil.image.heroTop} alt={''}/>
                </div>
                <h2 className={`md:text-[30px] text-[25px] ${themeState.theme == 'light' ? 'text-black' : 'text-white'} font-semibold`}><Link to={RoutesConstant.page.home}>Jeala
                    AI</Link></h2>
                {
                    !isClose ?
                        <MenuIcon color={themeState.theme == 'light' ? '#060C2C' : '#fff'} onClick={toggle} width={25} height={25}
                                  className={' cursor-pointer block xl:hidden'}/> :
                        <CloseIcon color={themeState.theme == 'light' ? '#060C2C' : '#fff'} onClick={toggle}
                                   className={'w-[30px] h-[30px] cursor-pointer block xl:hidden'}/>
                }
                <ul className={`menu menu-horizontal ${themeState.theme == 'light' ? 'text-black' : 'text-white'} items-center gap-5 md:text-[18px] text-[14px] leading-[32px]  xl:flex hidden font-poppins font-light`}>
                    <li className={hoverClassName}><a href={'/#overview'} onClick={()=> handleNavigation() }>Overview</a></li>
                    <li className={hoverClassName}><a href={'/#feedback'} onClick={()=> handleNavigation() }>Review</a></li>
                    <li className={hoverClassName}><a href={'/#pricing'} onClick={()=> handleNavigation()}>Pricing</a></li>
                    <li className={hoverClassName}><a href={'/#waitlist'} onClick={()=> handleNavigation()}>Waitlist</a></li>
                    <li className={``}>
                        <DefaultMenuItem   />
                    </li>
                    <li className={hoverClassName}><a href={'/#faq'} onClick={() => handleNavigation()}>FAQs</a></li>
                    <li className={''}><Link className={'btn border-0 bg-primary-100 text-white'}
                        to={RoutesConstant.page.home}>Get
                        Started</Link></li>

                    <li className={''}><a href={'#'} onClick={themeChange}>
                        {
                            themeState.theme == 'light' ?
                                <MoonIcon width={30} height={30} className={''}/> :
                                <SunIcon width={30} height={30} className={''}/>
                        }
                    </a></li>
                </ul>
            </motion.div>

            {/*todo mobile*/}
            <ul className={`xl:hidden menu  md:text-[20px] text-[14px] pt-10 absolute ${themeState.theme == 'light' ? 'bg-white text-black' : 'bg-dark-400 text-white'} top-20 gap-5 pl-14 min-w-full ${isClose ? 'left-0' : '-left-[100%]'} transition-left duration-150  h-svh w-full flex flex-col items-left`}>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#overview'} onClick={()=> handleNavigation()}>Overview</a></li>
                {/*<li className={`${hoverClassName} mobile-lg`}><a href={'/#capabilities'} onClick={()=> handleNavigation()}>Capabilities</a></li>*/}
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#feedback'} onClick={()=> handleNavigation()}>Review</a></li>
                {/*<li className={`${hoverClassName} mobile-lg`}><a href={'/#useCase'} onClick={()=> handleNavigation()}>Use Case</a></li>*/}
                <li className={`${hoverClassName} mobile-lg`}>
                    <DefaultMenuItem handlePress={handleNavigation} />
                </li>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#pricing'} onClick={()=> handleNavigation()}>Pricing</a></li>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#waitlist'} onClick={()=> handleNavigation()}>Waitlist</a></li>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#faq'} onClick={()=> handleNavigation()}>FAQs</a></li>
                <li className={'text-primary-100 mobile-lg'}><Link to={RoutesConstant.page.home}>Get
                    Started</Link></li>
                <li className={''}><a href={'#'} onClick={themeChange}>
                    {
                        themeState.theme == 'light' ?
                            <MoonIcon width={30} height={30} className={''}/> :
                            <SunIcon width={30} height={30} className={''}/>
                    }
                </a></li>
            </ul>
        </nav>
    )


}