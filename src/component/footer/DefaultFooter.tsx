import { motion } from "framer-motion";
import {FeedbackInput} from "@/component/input/FeedbackInput.tsx";
import RoundedTwitter from "@/assets/icon/rounded-email.svg"
import RoundedEmail from "@/assets/icon/rounded-twitter.svg"
import RoundedFacebook from "@/assets/icon/rounded-facebook.svg"
import RoundedInstagram from "@/assets/icon/rounded-instagram.svg"
import RoundedLinkin from "@/assets/icon/rounded-linkdin.svg"

export const DefaultFooter = () => {
    const hoverClassName = 'hover:border-b hover:text-primary-100 hover:border-b-primary-100  transition-all duration-300'

    return(
        <footer className={'py-5  bg-black-200'}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ease:'easeOut', duration: 1, delay: 0.2}}
                className={'container-responsive flex h-full flex-col items-center gap-4'}>
                <div className={' w-full gap-2  flex lg:flex-row flex-col items-center justify-between'}>
                    <div className={'lg:w-1/2 w-full text-center lg:text-end'}>
                        <h2 className={'md:text-[20px] text-[18px] font-poppins-medium font-bold md:leading-[30px] leading-[20px] text-white mb-4'}>Contact us</h2>
                        <p className={`font-[200] md:text-[16px] text-[14px] text-white md:leading-[25px] cursor-pointer  leading-[20px] inline-block  ${hoverClassName}`}>info@gramenpetroserve.com;,</p>
                        <p className={`font-[200] md:text-[16px] text-[14px] text-white md:leading-[25px] cursor-pointer  leading-[20px]`}>Plot 18 Chevron Clinic Road, Off NPA DSC-Expressway,</p>
                        <p className={`font-[200] md:text-[16px] text-[14px]  text-white md:leading-[25px] cursor-pointer  leading-[20px]  `}> Edjeba, Warri, Delta State.</p>
                        <p className={`font-[200] md:text-[16px] text-[14px]  text-white md:leading-[25px] cursor-pointer  leading-[20px]  `}>
                            <a className={`${hoverClassName}`}>+234-803-407-0217</a>
                            ,  <a className={`${hoverClassName}`}>+234-903-855-1651</a>,
                        </p>
                    </div>
                    <div className={' lg:w-1/2 w-[60%] flex flex-col items-center'}>
                        <h2 className={'md:text-[20px] text-[18px] mb-4 font-poppins-medium font-bold md:leading-[30px] leading-[20px] text-white'}>
                            secure your spot on the Jeala AI waitlist!
                        </h2>
                        <FeedbackInput buttonClassName={' md:btn-md btn-sm text-[13px] '} containerClassName={'w-full h-[70px]'} />
                    </div>
                </div>
                <div className={'border-t border-white w-full gap-2 flex flex-col lg:flex-row  items-center justify-between  pt-3'}>
                    <div className={'flex items-center  gap-2'}>
                        <RoundedTwitter />
                        <RoundedEmail />
                        <RoundedFacebook />
                        <RoundedInstagram />
                        <RoundedLinkin />
                    </div>
                    <div className={'flex flex-col items-end '}>
                        <p className={'text-white text-sm'}>Copyright © 2024 •Jeala AI</p>
                        <p className={'text-white text-sm'}>Privacy & Legal terms</p>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}