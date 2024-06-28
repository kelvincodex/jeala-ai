import RoundedPlus from '@/assets/icon/rounded-plus.svg'
import {useState} from "react";

interface DefaultAccordionProps  {
    title: string,
    text?: string,
    showText: boolean,
}
export const DefaultAccordion = ({title, text, showText}: DefaultAccordionProps)=>{
    const [show, setShow] = useState<boolean>(false)

    return (
        <div className={'md:my-8 my-5'}>
            <div onClick={()=> setShow(!show)} className={'flex items-center gap-3 my-2 cursor-pointer'}>
                <RoundedPlus className={'max-w-6 max-h-6'} />
                <p className={'md:text-[20px] text-[18px] '}>{title}</p>
            </div>
            {
                (!showText && show) && (
                    <div className={'ml-7 transition-all duration-300'}>
                        <p className={'text-[18px] leading-[30px]'}>{text}</p>
                    </div>
                )
            }

        </div>
    )
}

DefaultAccordion.defaultProps = {
    showText: false
}