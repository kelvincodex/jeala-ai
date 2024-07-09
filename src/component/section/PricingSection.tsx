import {PriceCard} from "@/component/card/PriceCard.tsx";
import {importsUtil} from "@/util/importsUtil.ts";
import {priceData} from "@/util/data/PriceData.ts";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

export const PricingSection = ()=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <section id={'pricing'} className={'md:py-24 py-10'}>
            <div

                className={'container-responsive relative flex flex-col items-center justify-center'}>


                <img className={'sm:w-[200px] w-[150px] md:w-[400px] sm:h-[200px] h-[150px] md:h-[400px] absolute -top-16 md:-top-40 md:-left-32 lg:-top-40 -left-10 lg:-left-16'} src={importsUtil.image.rocket} alt={''}/>

                <motion.div
                    variants={FramerConfigUtil.fadeDown}
                    initial={'hidden'}
                    whileInView={'show'}
                    transition={{duration: 1, delay: 0.2, ease:'easeOut'}}
                    viewport={{once:true}}
                >
                    <h2 className={`text-center font-semibold mb-10 ${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>
                        <span className={'text-primary-100'}>Go</span> Premium
                    </h2>
                </motion.div>


                <motion.div
                    variants={FramerConfigUtil.stagParent}
                    initial={'hidden'}
                    whileInView={'show'}
                    className={'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'}>
                    {
                        priceData.map((value, index) => {
                            return (
                                <PriceCard item={value} key={index}/>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}