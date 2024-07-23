import {SliderContainer} from "@/component/container/SliderContainer.tsx";
import  ChevronLeft  from '@/assets/icon/chevron-left.svg'
import  ChevronRight  from '@/assets/icon/chevron-right.svg'
import {useRef} from "react";
import Slider from "react-slick";
import {FeedbackContainerCard} from "@/component/card/FeedbackContainerCard.tsx";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {FeedbackData} from "@/util/data/FeedbackData.ts";

export const FeedbackSection = ()=>{
    const sliderRef = useRef<Slider>(null)
    const themeState = useSelector((state: RootState) => state.theme);

    const settings = {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 1045,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    }


    function prev() {
        sliderRef.current?.slickPrev();
    }

    function next() {
        sliderRef.current?.slickNext();
    }

    return(
        <section
            id={'feedback'}
            className={'w-full md:py-18 py-10'}>
            <motion.div
                variants={FramerConfigUtil.fadeDown}
                initial={'hidden'}
                whileInView={'show'}
                transition={{ease: 'easeOut', duration: 1, delay: 0.2}}

                className={'flex justify-center md:mb-16 mb-10'}>
                <span className={`md:text-[60px] ${themeState.theme == 'light' ? 'text-black' : 'text-white'} text-[40px] font-urbanist font-semibold rotate-12`}>"</span>
                <h2
                    className={'text-center font-semibold md:mt-5 mt-2 md:ml-5 ml-2 md:-mr-3 -mr-1 bg-clip-text text-transparent bg-gradient-to-r from-primary-150 to-primary-200'}>
                    <span
                        className={`${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>What Our</span> Users
                    Are <br/> Saying
                </h2>
                <span
                    className={'md:text-[60px] text-[40px] font-urbanist font-semibold rotate-12  text-primary-200'}>"</span>
            </motion.div>

            <motion.div
                variants={FramerConfigUtil.stagParent}
                initial={'hidden'}
                whileInView={'show'}
                className={'md:w-[90%] w-full mx-auto'}>
                <SliderContainer
                    ref={sliderRef}
                    settings={settings}
                >
                    {
                        FeedbackData.map((value, index) => {
                            return (
                                <div
                                    key={index}>
                                    <FeedbackContainerCard title={value.title} subtitle={value.subtitle} rating={value.rating} text={value.text} department={value.department}  />
                                </div>
                            )
                        })
                    }
                </SliderContainer>
                <div className={'flex md:gap-5 gap-5 w-full justify-end pt-10 pr-10'}>
                    <ChevronLeft onClick={prev} className={'cursor-pointer text-primary-100 md:w-8 w-5 h-8'}  />
                    <ChevronRight onClick={next} className={'cursor-pointer text-primary-100 md:w-8 w-5 h-8'}  />
                </div>
            </motion.div>

        </section>
    )
}