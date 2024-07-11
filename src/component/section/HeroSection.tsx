import {SliderContainer} from "@/component/container/SliderContainer.tsx";
import {heroConfigData} from "@/util/data/HeroConfigData.ts";
import {HeroCard} from "@/component/card/HeroCard.tsx";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {importsUtil} from "@/util/importsUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

export const HeroSection = () => {
    const themeState = useSelector((state: RootState) => state.theme);

    const settings = {
        dots: false,
        slidesToShow: 3.5,
        slidesToScroll: 1.5,
    }

    return (
        <section id={'overview'} className={'w-full'}>
            <div className={'container-responsive relative   -top-10 -left-16'}>
                <img
                    className={'md:w-[300px] w-[100px] h-[200px] absolute object-bottom '}
                    src={importsUtil.image.heroTop} alt={''}/>
            </div>
            <div
                className={'flex flex-col w-full justify-center min-h-[calc(100svh-80px)] overflow-hidden md:min-h-[calc(100vh-100px)] relative pt-10 gap-10 md:gap-20'}
            >
                <motion.img
                    initial={{opacity: 0.5, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                    className={'absolute '} src={importsUtil.image.heroRipple} alt={''}/>

                <div className={`${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>

                    <motion.h2
                        variants={FramerConfigUtil.fadeDown}
                        initial={'hidden'}
                        whileInView={'show'}
                        transition={{ease:'easeOut', duration: 1, delay: 0.2}}

                        className={`text-center capitalize  font-semibold ${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>
                        <span className={'text-primary-100'}>Discover and explore</span> The <br/> Future of
                        intelligent
                        solutions <br/> with Jeala AI
                    </motion.h2>

                    <motion.p
                        variants={FramerConfigUtil.fadeUp}
                        initial={'hidden'}
                        whileInView={'show'}
                        transition={{ease:'easeOut', duration: 1, delay: 0.2}}
                        className={`md:text-[28px] text-[20px]  md:leading-[40px] leading-[30px] ${themeState.theme == 'light' ? 'text-black' : 'text-white'} text-center font-urbanist mt-10  font-light`}>
                        Whether you're streamlining business operations, enhancing customer <br/> experiences,
                        or
                        exploring
                        new realms of creativity, Jeala AI is here to <br/> elevate your journey in all works of
                        life.
                    </motion.p>

                </div>

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