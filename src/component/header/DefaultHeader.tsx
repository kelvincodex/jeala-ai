import {Link} from "react-router-dom";
import {RoutesConstant} from "@/util/constant/RoutesConstant.ts";
import MenuIcon from '@/assets/icon/menu-close.svg'
import CloseIcon from '@/assets/icon/close-md.svg'
import MoonIcon from '@/assets/icon/moon.svg'
import {useEffect, useState} from "react";
import {animate, motion, stagger} from "framer-motion";
import {importsUtil} from "@/util/importsUtil.ts";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";

export const DefaultHeader = ()=>{
    const [isClose, setIsClose] = useState<boolean>(false)
    const staggerMenuItems = stagger(0.1, { startDelay: 0.10 });

    const hoverClassName = 'hover:border-b hover:text-primary-100 hover:border-b-primary-100  transition-all duration-300'

    function night(){
        console.log('logging')
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

    return (
        <nav className={'shadow sticky top-0 bg-white z-50 w-full transition-all duration-300 ease-in-out h-[80px] md:h-[100px] '}>
            <motion.div
                variants={FramerConfigUtil.fadeDown}
                initial={'hidden'}
                whileInView={'show'}
                transition={{ease:'easeOut', duration: 1, delay: 0.2}}

                className={'flex justify-between h-full items-center container-responsive relative'}>

                <div className={'h-full overflow-hidden absolute -left-28'}>
                    <img
                        className={' md:w-[400px] w-[100px] h-[200px]  object-bottom'}
                        src={importsUtil.image.heroTop} alt={''}/>
                </div>
                <h2 className={`md:text-[30px] text-[25px]  font-semibold`}><Link to={RoutesConstant.page.home}>Jeala
                    AI</Link></h2>
                {
                    !isClose ?
                        <MenuIcon onClick={toggle}
                                  className={'w-[30px] h-[30px] cursor-pointer block xl:hidden'}/> :
                        <CloseIcon onClick={toggle}
                                   className={'w-[30px] h-[30px] cursor-pointer block xl:hidden'}/>
                }
                <ul className={'items-center gap-5 md:text-[20px] text-[18px] leading-[32px]  xl:flex hidden font-poppins font-light'}>
                    <li className={hoverClassName}><a href={'/#overview'}>Overview</a></li>
                    <li className={hoverClassName}><a href={'/#capabilities' }>Capabilities</a></li>
                    <li className={hoverClassName}><a href={'/#resources' }>Resources</a></li>
                    <li className={hoverClassName}><a href={'/#useCase' }>Use Case</a></li>
                    <li className={hoverClassName}><a href={'/#pricing'}>Pricing</a></li>
                    <li className={hoverClassName}><a href={'/#waitlist'}>Waitlist</a></li>
                    <li className={hoverClassName}><a href={'/#faq'}>FAQ</a></li>
                    <li className={'text-primary-100 border-b hover:text-deep-blue-100'}><Link
                        to={RoutesConstant.page.home}>Get
                        Started</Link></li>
                    <li><MoonIcon onClick={night} className={'w-[30px] h-[30px]'}/></li>
                </ul>
            </motion.div>

            {/*todo mobile*/}
            <ul className={`xl:hidden text-[20px] pt-10 absolute bg-white top-20 gap-5 pl-14 min-w-full ${isClose ? 'left-0' : '-left-[100%]'} transition-left duration-150  h-svh w-full flex flex-col items-left`}>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#overview'}>Overview</a></li>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#capabilities'}>Capabilities</a></li>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#resources'}>Resources</a></li>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#useCase'}>Use Case</a></li>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#pricing'}>Pricing</a></li>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#waitlist'}>Waitlist</a></li>
                <li className={`${hoverClassName} mobile-lg`}><a href={'/#faq'}>FAQ</a></li>
                <li className={'text-primary-100 mobile-lg'}><Link to={RoutesConstant.page.home}>Get
                    Started</Link></li>
                <li><MoonIcon onClick={night} className={'w-[30px] h-[30px]'}/></li>
            </ul>
        </nav>
    )
}