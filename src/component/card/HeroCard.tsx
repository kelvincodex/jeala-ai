import { motion } from "framer-motion"
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";

interface HeroCardProps {
    item: any
}
export const HeroCard = ({item}: HeroCardProps)=>{

    return (
        <motion.div
            variants={FramerConfigUtil.stagChildren}
            className={'rounded-lg border mx-2 md:py-20 py-10 flex flex-col px-5 justify-center gap-5'}>
            <h2 className={'md:text-[20px] text-[18px] font-semibold leading-[10px]'}>{item.title}</h2>
            <p className={'md:text-[18px] text-[16px]  leading-[25px] font-[200]'}>
                {item.subTitle}
            </p>
        </motion.div>
    )
}