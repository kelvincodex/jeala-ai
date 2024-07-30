import EmailIcon from "@/assets/icon/light-email.svg";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";

interface FeedbackInputProps {
    containerClassName?: string;
    buttonClassName?: string,
    inputClassName?: string,
}
export const FeedbackInput = ({containerClassName, buttonClassName, inputClassName}: FeedbackInputProps)=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        // <motion.div
        //     variants={FramerConfigUtil.fadeUp}
        //     initial={'hidden'}
        //     whileInView={'show'}
        //     transition={{ease: 'easeOut', duration: 1, delay: 0.2}}
        //     className={`w-full z-[999] flex justify-between items-center  ${themeState.theme == 'light' ? 'bg-white' : 'bg-transparent'} ${containerClassName}  px-1 md:px-3 overflow-hidden rounded-[20px] border gap-3`}>
        //     <BaseInput leftIcon={EmailIcon} className={`h-full text-[20px] bg-transparent placeholder:text-primary-100 ${inputClassName}`}
        //                placeholder={'Email Address'}/>
        //     {/*<Button className={'md:!py-5 !py-2 md:!px-10 !px-5  rounded !text-[10px] md:!text-[18px]'} variant={'contained'}></Button>*/}
        //     <DefaultButton className={` ${buttonClassName}`}>Join waitlist</DefaultButton>
        // </motion.div>

        <motion.div
            variants={FramerConfigUtil.fadeUp}
            initial={'hidden'}
            whileInView={'show'}
            transition={{ease: 'easeOut', duration: 1, delay: 0.2}}

            className={`w-full border h-[60px] ${themeState.theme == 'light' ? 'bg-white' : 'bg-transparent'} rounded-[10px] overflow-hidden  flex items-center px-2 ${containerClassName}`}>
            <EmailIcon className={'w-[50px]'} />
            <input placeholder={'Email Address'} className={`outline0-0 focus:outline-none h-full grow bg-transparent px-2 ${inputClassName}`} />
            <button className={`btn bg-primary-100 border-0 text-white ${buttonClassName}`}>Join Waitlist</button>
        </motion.div>
    )
}