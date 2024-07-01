import {CapabilitiesCard} from "@/component/card/CapabilitiesCard.tsx";
import {CapabilitiesData} from "@/util/data/CapabilitiesData.ts";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";

export const CapabilitiesSection=()=>{

    return (
        <section id={'capabilities'} className={'w-full md:py-18 py-10  bg-capability'}>

            <div className={'container-responsive flex flex-col md:gap-20 gap-10 items-center'}>
                <motion.div
                 variants={FramerConfigUtil.fadeDown}
                 initial={'hidden'}
                 whileInView={'show'}
                 transition={{ease:'easeOut', duration: 1, delay: 0.2}}
                >
                    <h2 className={`text-center hidden md:block`}>
                        AI Capabilities That Transform <br/> Your Workflow
                    </h2>
                    <h2 className={`text-center  md:hidden`}>
                        AI Capabilities That <br/> Transform Your Workflow
                    </h2>
                </motion.div>

                <motion.div
                    variants={FramerConfigUtil.stagParent}
                    initial={'hidden'}
                    whileInView={'show'}

                    className={'grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-flow-row lg:grid-rows-2 gap-5 md:w-[90%] m-auto'}>
                {
                        CapabilitiesData.map((item, index) =>
                        {
                            const isFirst = index === 0
                            const isSecond = index === 1
                            const isThird = index === 2
                            const isLast = index === (CapabilitiesData.length - 1)

                            const firstClass: string = 'col-start-1 row-span-3 '
                            const lastClass: string = ''
                            const secondClass: string = ''
                            const thirdClass: string = 'row-span-3'
                            return (
                                <CapabilitiesCard key={index} containerClassName={`${isFirst ? firstClass : isLast ? lastClass : isSecond ?  secondClass : isThird ? thirdClass :  '' }`} index={index} item={item}/>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}