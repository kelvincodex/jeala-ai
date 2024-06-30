import {DefaultAccordion} from "@/component/accordion/DefaultAccordion.tsx";
import {FAQData} from "@/util/data/FAQData.ts";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";

export const FAQSection = ()=>{
    return (
        <section className={'md:py-20 py-18 md:h-[800px] h-[500px] bg-faq'}>

            <div
                className={'container-responsive flex flex-col items-center h-full justify-center '}>

                    <motion.h2
                        variants={FramerConfigUtil.fadeDown}
                        initial={'hidden'}
                        whileInView={'show'}
                        transition={{duration: 1, ease: 'easeOut', delay:0.2}}
                        className={'font-urbanist font-semibold mb-5'}>
                        Frequently Asked Question
                    </motion.h2>

                <div className={'md:h-[500px] h-[350px] md:w-[80%] w-full overflow-y-scroll'}>
                {
                        FAQData.map((value, index) => {
                            return (
                                <DefaultAccordion key={index} text={value.text} title={value.title}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}