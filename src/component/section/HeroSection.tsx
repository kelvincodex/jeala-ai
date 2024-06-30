import {SliderContainer} from "@/component/container/SliderContainer.tsx";
import {heroConfigData} from "@/util/data/HeroConfigData.ts";
import {HeroCard} from "@/component/card/HeroCard.tsx";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {importsUtil} from "@/util/importsUtil.ts";

export const HeroSection = () => {


    const settings = {
        dots: false,
        slidesToShow: 3.5,
        slidesToScroll: 1.5,
    }

    return (
        <section className={'w-full'}>
            <div
                className={'flex flex-col bg-hero w-full justify-center min-h-[calc(100svh-70px)] overflow-hidden md:min-h-[calc(100vh-100px)] relative py-10 md:py-20 gap-10 md:gap-20'}
            >
                <img
                    className={'md:w-[200px] lg:w-[250px] w-[100px] md:h-[100px] lg:h-[100px] h-[200px] absolute top-0 left-24 lg:left-[50px] md:left-0  object-bottom'}
                    src={importsUtil.image.heroTop} alt={''}/>

                <motion.div
                    variants={FramerConfigUtil.fadeDown}
                    initial={'hidden'}
                    whileInView={'show'}
                    transition={{duration: 1, delay: 0.2, ease: 'easeOut'}}
                    viewport={{once: true}}
                >

                    <h2 className={`text-center capitalize  font-semibold`}>
                        <span className={'text-primary-100'}>Discover and explore</span> The <br/> Future of
                        intelligent
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

                <img
                    className={'md:w-[200px] lg:w-[300px] w-[100px] md:h-[400px]  lg:h-[600px] h-[200px] absolute top-0 right-0'}
                    src={importsUtil.image.heroLeft} alt={''}/>

                <motion.div
                    variants={FramerConfigUtil.stagParent}
                    initial={'hidden'}
                    whileInView={'show'}

                    className={'md:mt-10 w-full'}>
                    <SliderContainer containerClassName={'md:mt-10 w-full'} settings={settings}>
                        {heroConfigData.map((item, i) => (
                            <div
                                key={i}
                            >
                                <HeroCard item={item}/>
                            </div>
                        ))}
                    </SliderContainer>
                </motion.div>

            </div>
        </section>
    )
}