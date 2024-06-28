import {UseCaseData} from "@/util/data/UseCaseData.ts";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
// import {useMediaQuery} from "react-responsive";

export const UseCaseSection = ()=>{
    // const isMobileAndTablet = useMediaQuery({query: {}})

    return (
        <motion.section
            variants={FramerConfigUtil.scroll}
            initial={'initial'}
            whileInView={'view'}
            transition={{duration: 1, delay: 0}}
            viewport={{once: true}}

            className={'py-10 '}>
            <div className={'container-responsive flex flex-col justify-center items-center'}>
                <div className={'grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-5 w-full'}>
                    {
                        UseCaseData.map((item, index) => (
                            <div key={index}
                                 className="md:h-[400px] h-[250px] w-full flex flex-col justify-end relative rounded-xl overflow-hidden">
                                <img src={item.image} className={'object-cover  absolute w-full h-full z-0  duration-300 hover:scale-[]'}
                                     alt={''}/>
                                <h2 className={'z-10 text-white-100 font-poppins-b font-bold text-[40px] leading-[55px] ml-3'}>
                                    {item.title}
                                </h2>
                            </div>
                        ))
                    }

                </div>
            </div>
        </motion.section>
    )
}