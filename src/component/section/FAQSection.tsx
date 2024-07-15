import {DefaultAccordion} from "@/component/accordion/DefaultAccordion.tsx";
import {FAQData} from "@/util/data/FAQData.ts";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

export const FAQSection = ()=>{
    const [selectedItem, setSelectedItem] = useState<number>(0)
    const themeState = useSelector((state: RootState)=>  state.theme)

    function handleSubmit(index: number){
        setSelectedItem(index)
    }
    return (
        <section id={'faq'} className={'md:py-18 py-10 md:min-h-[800px] z-[9999999] max-h-full min-h-[500px] bg-faq'}>

            <div
                className={'md:w-[60%] w-[95%] flex flex-col h-full mx-auto justify-center '}>

                    <motion.h2
                        variants={FramerConfigUtil.fadeDown}
                        initial={'hidden'}
                        whileInView={'show'}
                        transition={{duration: 1, ease: 'easeOut', delay:0.2}}
                        className={`font-urbanist font-semibold mb-5 ${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>
                        Frequently Asked Questions
                    </motion.h2>

                <motion.div
                    variants={FramerConfigUtil.stagParent}
                    initial={'hidden'}
                    whileInView={'show'}

                    className={'h-full w-full '}>
                {
                        FAQData.map((value, index) => {
                            return (
                                <DefaultAccordion onPress={()=>handleSubmit(index)} showText={selectedItem == index} key={index} text={value.text} title={value.title}/>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}