import {motion} from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {BaseInput} from "@/component/input/BaseInput.tsx";
import EmailIcon from "@/assets/icon/light-email.svg";
import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface FeedbackInputProps {
    containerClassName?: string;
    textSize: string
}
export const FeedbackInput = ({containerClassName}: FeedbackInputProps)=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <motion.div
            variants={FramerConfigUtil.fadeUp}
            initial={'hidden'}
            whileInView={'show'}
            transition={{ease: 'easeOut', duration: 1, delay: 0.2}}
            className={`w-full lg:w-[70%]  z-[999] flex justify-between items-center  ${themeState.theme == 'light' ? 'bg-white' : 'bg-transparent'} ${containerClassName}  px-1 md:px-3 overflow-hidden rounded-[20px] border gap-3`}>
            <BaseInput leftIcon={EmailIcon} className={`h-full text-[20px] bg-transparent placeholder:text-primary-100`}
                       placeholder={'Email Address'}/>
            {/*<Button className={'md:!py-5 !py-2 md:!px-10 !px-5  rounded !text-[10px] md:!text-[18px]'} variant={'contained'}></Button>*/}
            <DefaultButton className={'lg:btn-lg md:btn-md btn-sm text-[13px]'}>Join waitlist</DefaultButton>
        </motion.div>
    )
}