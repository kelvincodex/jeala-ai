import {SliderContainer} from "@/component/container/SliderContainer.tsx";
import  ChevronLeft  from '@/assets/icon/chevron-left.svg'
import  ChevronRight  from '@/assets/icon/chevron-right.svg'
import {useRef} from "react";
import Slider from "react-slick";
import {FeedbackContainerCard} from "@/component/card/FeedbackContainerCard.tsx";

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
        <section className={'w-full py-20'}>
            <div className={'flex justify-center mb-16'}>
                <span className={'text-[60px] font-urbanist font-semibold rotate-12'}>"</span>
                <h2 className={'text-center font-semibold mt-5 ml-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-150 to-primary-200'}>
                    What Our Users Are <br/> Saying
                </h2>
                <span className={'text-[60px] font-urbanist font-semibold rotate-12  text-primary-200'}>"</span>
            </div>

            {/*<div className={'overflow-x-auto flex gap-10  items-center justify-center w-full pl-24'}>*/}
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
            <div className={'flex gap-10 w-full justify-end pt-10 pr-10'}>
                <ChevronLeft onClick={prev} className={'cursor-pointer text-primary-100'}  />
                <ChevronRight onClick={next} className={'cursor-pointer text-primary-100'}  />
            </div>

                {/*</div>*/}

        </section>
    )
}