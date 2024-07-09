import { motion } from "framer-motion"
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface HeroCardProps {
    item: any
}
export const HeroCard = ({item}: HeroCardProps)=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <motion.div
            variants={FramerConfigUtil.stagChildren}
            className={`rounded-lg border mx-2 md:py-14 py-10 flex flex-col px-5 justify-center gap-5}`}>
            <h2 className={`md:text-[20px] text-[18px] font-semibold leading-[10px] ${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>{item.title}</h2>
            <p className={`md:text-[18px] text-[16px]  leading-[25px] font-[200] mt-5 ${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>
                {item.subTitle}
            </p>
        </motion.div>
    )
}