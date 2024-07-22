import  LightRoundedPlus from '@/assets/icon/light-rounded-plus.svg'
import  RoundedPlus from '@/assets/icon/rounded-plus.svg'
import  RoundedMinus from '@/assets/icon/minus-square.svg'
import {useState} from "react";
import { motion } from 'framer-motion';
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface DefaultAccordionProps  {
    title: string,
    text?: string,
    showText: boolean,
    onPress: ()=>void
}
export const DefaultAccordion = ({title, text, onPress=()=>{}, showText=false}: DefaultAccordionProps)=>{
    const [show, setShow] = useState<boolean>(false)
    const themeState = useSelector((state: RootState) => state.theme);


    function handleClick(){
        onPress()
        setShow(!show)
        console.log('hello')
    }
    return (
        <motion.div variants={FramerConfigUtil.stagChildren} className={'md:my-8 my-5 '}>
            {
                themeState.theme == 'light' ?
                    <button onClick={handleClick} className={'flex items-center gap-3 my-2 cursor-pointer'}>
                        {
                                (showText && show) ?
                                    <RoundedMinus color={'#1C274C'} className={'max-w-6 max-h-6'}/> :
                                    <RoundedPlus color={'#060C2C'} className={'max-w-6 max-h-6'}/>
                        }
                        <p className={`lg:text-[20px] md:text-[18px] text-[14px] text-left ${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>{title}</p>
                    </button>
                    :
                    <button onClick={handleClick} className={'flex items-center gap-3 my-2 cursor-pointer'}>
                        {
                                (showText && show) ?
                                    <RoundedMinus color={'white'} className={'max-w-6 max-h-6'}/> :
                                    <LightRoundedPlus className={'max-w-6 max-h-6'}/>
                        }
                        <p className={`lg:text-[20px] md:text-[18px] text-[14px] text-left ${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>{title}</p>
                    </button>
            }

            {
                (showText && show) && (
                    <div className={'ml-7 transition-all duration-300'}>
                        <p className={`lg:text-[18px] md:text-[14px] text-[12px]  leading-[30px] ${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>{text}</p>
                    </div>
                )
            }

        </motion.div>
    )
}
