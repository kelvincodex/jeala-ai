import {SliderContainer} from "@/component/container/SliderContainer.tsx";
import  ChevronLeft  from '@/assets/icon/chevron-left.svg'
import  ChevronRight  from '@/assets/icon/chevron-right.svg'
import {useRef} from "react";
import Slider from "react-slick";
import {FeedbackContainerCard} from "@/component/card/FeedbackContainerCard.tsx";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";

export const FeedbackSection = ()=>{
    const sliderRef = useRef<Slider>(null)

    const settings = {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
    }


    function prev() {
        sliderRef.current?.slickPrev();
    }

    function next() {
        sliderRef.current?.slickNext();
    }

    return(
        <motion.section
            variants={FramerConfigUtil.scroll}
            initial={'initial'}
            whileInView={'view'}
            transition={{duration: 1, delay: 0}}
            viewport={{once:true}}


            className={'w-full md:py-20 py-10'}>
            <div className={'flex justify-center md:mb-16 mb-10'}>
                <span className={'md:text-[60px] text-[40px] font-urbanist font-semibold rotate-12'}>"</span>
                <h2 className={'text-center font-semibold md:mt-5 mt-2 md:ml-5 ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-150 to-primary-200'}>
                    What Our Users Are <br/> Saying
                </h2>
                <span className={'md:text-[60px] text-[40px] font-urbanist font-semibold rotate-12  text-primary-200'}>"</span>
            </div>

            <div className={'md:w-[90%] w-full mx-auto'}>
                <SliderContainer
                    ref={sliderRef}
                    settings={settings}
                >
                    {
                        Array(5).fill('').map((_, index) => {

                            return (
                                <div  key={index}>
                                    <FeedbackContainerCard />
                                </div>
                            )
                        })
                    }
                </SliderContainer>
                <div className={'flex md:gap-5 gap-5 w-full justify-end pt-10 pr-10'}>
                    <ChevronLeft onClick={prev} className={'cursor-pointer text-primary-100 md:w-8 w-5 h-8'}  />
                    <ChevronRight onClick={next} className={'cursor-pointer text-primary-100 md:w-8 w-5 h-8'}  />
                </div>
            </div>

        </motion.section>
    )
}