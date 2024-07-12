import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import {BaseInput} from "@/component/input/BaseInput.tsx";
import EmailIcon from "@/assets/icon/light-email.svg"
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {importsUtil} from "@/util/importsUtil.ts";

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
                    secure your spot on <br/> the Jeala AI waitlist!
                </motion.h2>

                {
                    themeState.theme == 'dark' && (
                        <img className={'absolute top-0 w-[1000px] h-[1000px] z-[-9]'} src={importsUtil.image.darkWaitList}
                             alt={''}/>
                    )
                }
                <motion.div
                    variants={FramerConfigUtil.fadeUp}
                    initial={'hidden'}
                    whileInView={'show'}
                    transition={{ease: 'easeOut', duration: 1, delay: 0.2}}
                    className={`w-full md:w-full lg:w-[70%] md:h-[90px] h-[70px] z-[999] flex justify-between items-center  ${themeState.theme == 'light' ? 'bg-white' : 'bg-transparent'}  px-1 md:px-3 overflow-hidden rounded-[20px] border gap-3`}>
                    <BaseInput  leftIcon={EmailIcon} className={'flex-grow h-full  bg-transparent placeholder:text-primary-100 w-10'} placeholder={'Email Address'} />
                    {/*<Button className={'md:!py-5 !py-2 md:!px-10 !px-5  rounded !text-[10px] md:!text-[18px]'} variant={'contained'}></Button>*/}
                    <DefaultButton  className={'lg:btn-lg md:btn-md btn-sm text-[13px]'}>Join waitlist</DefaultButton>
                </motion.div>
            </div>
        </section>
    )
}