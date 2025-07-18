import {UseCaseData} from "@/util/data/UseCaseData.ts";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
// import {useMediaQuery} from "react-responsive";

export const UseCaseSection = ()=>{
    // const isMobileAndTablet = useMediaQuery({query: {}})

    return (
        <section
            id={'useCase'}
            className={'py-10 md:py-18'}>
            <div className={'container-responsive flex flex-col justify-center items-center'}>
                <motion.div
                    variants={FramerConfigUtil.stagParent}
                    initial={'hidden'}
                    whileInView={'show'}

                    className={'grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-5 w-full'}>
                    {
                        UseCaseData.map((item, index) => (
                            <motion.div
                                variants={FramerConfigUtil.stagChildren}
                                key={index}
                                 className="md:h-[400px] cursor-pointer h-[250px] w-full flex flex-col justify-end relative rounded-xl overflow-hidden">
                                <img src={item.image} className={'object-cover  absolute w-full h-full z-0  duration-300 hover:scale-[1.1]'}
                                     alt={''}/>
                                <h2 className={'z-10 text-white-100 font-poppins-b font-bold text-[40px] leading-[55px] ml-10 mb-5'}>
                                    {item.title}
                                </h2>
                            </motion.div>
                        ))
                    }

                </motion.div>
            </div>
        </section>
    )
}