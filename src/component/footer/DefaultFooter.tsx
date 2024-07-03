import {Link} from "react-router-dom";
import {FooterData} from "@/util/data/FooterData.ts";
import { motion } from "framer-motion";

export const DefaultFooter = () => {
    const hoverClassName = 'hover:border-b hover:text-primary-100 hover:border-b-primary-100  transition-all duration-300'

    return(
        <footer className={'py-16 bg-black-200'}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ease:'easeOut', duration: 1, delay: 0.2}}

                className={'container-responsive flex flex-col items-center '}>
                <div className={'grid md:grid-cols-2 lg:grid-cols-4  grid-cols-2 md:gap-20 lg:gap-40 gap-10'}>
                    {
                        FooterData.map((value, index) => (
                            <ul key={index} className={'font-[200] font-poppins text-white'}>
                                <li className={'md:text-[20px] text-[18px] font-poppins-medium font-bold md:leading-[30px] leading-[20px]'}>{value.title}</li>
                                {
                                    value.subitems.map((subitems, index) => (
                                        <li key={index} className={`font-light md:text-[16px] text-[14px] ${hoverClassName} md:leading-[25px] leading-[20px] md:my-3 my-2`}><Link
                                            to={subitems.route ?? '/'}>{subitems.label}</Link></li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </div>
            </motion.div>
        </footer>
    )
}