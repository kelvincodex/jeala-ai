import  RoundedPlus from '@/assets/icon/rounded-plus.svg'
import  RoundedMinus from '@/assets/icon/minus-square.svg'
import {useState} from "react";
import { motion } from 'framer-motion';
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";

interface DefaultAccordionProps  {
    title: string,
    text?: string,
    showText: boolean,
    onPress: ()=>void
}
export const DefaultAccordion = ({title, text, onPress, showText}: DefaultAccordionProps)=>{
    const [show, setShow] = useState<boolean>(false)


    function handleClick(){
        onPress()
        setShow(!show)
    }
    return (
        <motion.div variants={FramerConfigUtil.stagChildren} className={'md:my-8 my-5'}>
            <button onClick={handleClick} className={'flex items-center gap-3 my-2 cursor-pointer'}>
                {
                    (showText && show) ?
                        <RoundedMinus  className={'max-w-6 max-h-6'} /> :
                        <RoundedPlus  className={'max-w-6 max-h-6'} />
                }
                <p className={'md:text-[20px] text-[18px] '}>{title}</p>
            </button>
            {
                (showText && show) && (
                    <div className={'ml-7 transition-all duration-300'}>
                        <p className={'text-[18px] leading-[30px]'}>{text}</p>
                    </div>
                )
            }

        </motion.div>
    )
}

DefaultAccordion.defaultProps = {
    showText: false,
    onPress: ()=>{}
}