// import { LazyLoadImage } from "react-lazy-load-image-component";

import { motion } from "framer-motion"
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface CapabilitiesCardProps {
    index: number,
    item: any,
    containerClassName?: string,
}
export const CapabilitiesCard = ({ item, containerClassName}: CapabilitiesCardProps)=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <motion.div
            variants={FramerConfigUtil.stagChildren}

            className={` ${themeState.theme == 'light' ? 'bg-white' : 'bg-dark-350'} shadow rounded-2xl  flex flex-col  justify-center lg:px-20 px-10 py-10  gap-5 ${containerClassName}`}>
            {
                item.icon && (
                    <item.icon color={`${themeState.theme == 'light' ? 'black' : 'white'}`} className={'md:w-[40px] w-[30px] md:h-[40px] h-[30px] self-end'}/>
                )
            }
            <h2 className={'md:text-[30px] font-poppins text-[20px] text-primary-100 md:leading-[35px] leading-[25px]'}>
                {item.title}
            </h2>
            <p className={`md:text-[20px] text-[17px] font-lexend ${themeState.theme == 'light' ? 'text-black-200' : 'text-white'} font-[200] md:leading-[37px] leading-[30px] `}>
                {item.subTitle}
            </p>
        </motion.div>
    )
}