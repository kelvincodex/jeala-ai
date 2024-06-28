import {SliderContainer} from "@/component/container/SliderContainer.tsx";
import {heroConfigData} from "@/util/data/HeroConfigData.ts";
import {HeroCard} from "@/component/card/HeroCard.tsx";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";

export const HeroSection = () => {


    const settings = {
        dots: false,
        slidesToShow: 3.5,
        slidesToScroll: 1.5,
    }

    return (
        <section className={'w-full'}>
                <div
                    className={'flex flex-col w-full justify-center min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-100px)] py-10 md:py-20 gap-10 md:gap-20'}
                >
                    <motion.div
                        variants={FramerConfigUtil.scroll}
                        initial={'initial'}
                        whileInView={'view'}
                        transition={{duration: 1, delay: 0.2}}
                        viewport={{once:true}}
                        className={''}>
                        <h2 className={`text-center capitalize  font-semibold`}>
                            <span className={'text-primary-100'}>Discover and explore</span> The <br/> Future of intelligent
                            solutions <br/> with Jeala AI
                        </h2>

                        <p className={`md:text-[28px] text-[20px]  md:leading-[40px] leading-[30    px] text-center font-urbanist mt-10  font-light`}>
                            Whether you're streamlining business operations, enhancing customer <br/> experiences,
                            or
                            exploring
                            new realms of creativity, Jeala AI is here to <br/> elevate your journey in all works of
                            life.
                        </p>

                    </motion.div>

                    <motion.div
                        variants={FramerConfigUtil.base}
                        initial={'initial'}
                        whileInView={'view'}
                        className={'md:mt-10 w-full'}>
                        <SliderContainer containerClassName={'md:mt-10 w-full'} settings={settings}>
                            {heroConfigData.map((item, i) => (
                                <div key={i}>
                                    <HeroCard item={item} />
                                </div>
                            ))}
                        </SliderContainer>
                    </motion.div>

                </div>
        </section>
    )
}