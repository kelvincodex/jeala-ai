import { motion } from "framer-motion";
import {FeedbackInput} from "@/component/input/FeedbackInput.tsx";

export const DefaultFooter = () => {
    const hoverClassName = 'hover:border-b hover:text-primary-100 hover:border-b-primary-100  transition-all duration-300'

    return(
        <footer className={'py-16 h-[450px] bg-black-200'}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ease:'easeOut', duration: 1, delay: 0.2}}

                className={'container-responsive flex flex-col items-center '}>
                <div className={'border border-white w-full flex justify-between'}>
                    <div>
                        <h2 className={'md:text-[20px] text-[18px] font-poppins-medium font-bold md:leading-[30px] leading-[20px] text-white'}>Contact us</h2>
                        <p className={`font-light md:text-[16px] text-[14px] text-white md:leading-[25px] cursor-pointer  leading-[20px] md:my-3 my-2 ${hoverClassName}`}></p>
                        <p className={`font-light md:text-[16px] text-[14px]  text-white md:leading-[25px] cursor-pointer  leading-[20px] md:my-3 my-2 `}>Plot 18 Chevron Clinic Road, Off NPA DSC-Expressway, Edjeba, Warri, Delta State.</p>
                        <p className={`font-light md:text-[16px] text-[14px]  text-white md:leading-[25px] cursor-pointer  leading-[20px] md:my-3 my-2 `}>
                            <a className={`${hoverClassName}`}>+234-803-407-0217</a>
                            ,  <a className={`${hoverClassName}`}>+234-903-855-1651</a>,
                        </p>
                    </div>
                    <div>
                        <h2 className={'md:text-[20px] text-[18px] font-poppins-medium font-bold md:leading-[30px] leading-[20px] text-white'}>
                            secure your spot on the Jeala AI waitlist!
                        </h2>
                        <FeedbackInput />
                    </div>
                </div>
                <div></div>
            </motion.div>
        </footer>
    )
}