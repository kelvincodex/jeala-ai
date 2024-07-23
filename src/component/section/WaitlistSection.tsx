import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import {BaseInput} from "@/component/input/BaseInput.tsx";
import EmailIcon from "@/assets/icon/light-email.svg"
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {importsUtil} from "@/util/importsUtil.ts";
import {FeedbackInput} from "@/component/input/FeedbackInput.tsx";

export const WaitlistSection = ()=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <section id={'waitlist'} className={`relative md:py-24 py-20 ${themeState.theme == 'light' ? 'bg-primary-100' : 'bg-dark-400'}`}>
            <div

                className={'flex flex-col items-center container-responsive'}>
                <motion.h2
                    variants={FramerConfigUtil.fadeDown}
                    initial={'hidden'}
                    whileInView={'show'}
                    transition={{ease: 'easeOut', duration: 1, delay: 0.2}}

                    className={'text-center font-urbanist font-semibold mb-20 text-white capitalize  '}>
                    Secure your spot!<br/> Join our wait list
                </motion.h2>

                {
                    themeState.theme == 'dark' && (
                        <img className={'absolute top-0 w-[1000px] h-[1000px] z-[-9]'} src={importsUtil.image.darkWaitList}
                             alt={''}/>
                    )
                }
                <FeedbackInput containerClassName={'md:h-[90px] h-[70px]'} />
            </div>
        </section>
    )
}