import {Link} from "react-router-dom";
import {FooterData} from "@/util/data/FooterData.ts";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import { motion } from "framer-motion";

export const DefaultFooter = () => {

    return(
        <footer className={'py-16 bg-black-200'}>
            <motion.div
                variants={FramerConfigUtil.scroll}
                initial={'initial'}
                whileInView={'view'}
                transition={{duration: 1, delay: 0.2}}
                viewport={{once:true}}

                className={'container-responsive flex flex-col items-center '}>
                <div className={'grid md:grid-cols-4 grid-cols-2 md:gap-40 gap-10'}>
                    {
                        FooterData.map((value, index) => (
                            <ul key={index} className={'font-[200] font-poppins text-white'}>
                                <li className={'md:text-[20px] text-[18px] font-poppins-medium font-bold md:leading-[30px] leading-[20px]'}>{value.title}</li>
                                {
                                    value.subitems.map((subitems, index) => (
                                        <li key={index} className={'font-light md:text-[16px] text-[14px] md:leading-[25px] leading-[20px] md:my-3 my-2'}><Link
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