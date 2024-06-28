import {PriceCard} from "@/component/card/PriceCard.tsx";
import {importsUtil} from "@/util/importsUtil.ts";
import {priceData} from "@/util/data/PriceData.ts";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";

export const PricingSection = ()=>{
    return (
        <section className={' md:py-24 py-10'}>
            <motion.div
                variants={FramerConfigUtil.scroll}
                initial={'initial'}
                whileInView={'view'}
                transition={{duration: 1, delay: 0}}
                viewport={{once:true}}
                className={'container-responsive relative flex flex-col items-center justify-center'}>
                    <img className={'w-[200px] md:w-[400px] h-[200px] md:h-[400px] absolute -top-16 md:-top-40 md:-left-32 lg:-top-40 -left-10 lg:-left-16'} src={importsUtil.image.rocket} alt={''}/>
                <h2 className={'text-center font-semibold mb-10'}>
                    <span className={'text-primary-100'}>Go</span> Premium
                </h2>


                <div className={'w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'}>
                    {
                        priceData.map((value, index) => {
                            return (
                                <PriceCard item={value} key={index}/>
                            )
                        })
                    }
                </div>
            </motion.div>
        </section>
    )
}