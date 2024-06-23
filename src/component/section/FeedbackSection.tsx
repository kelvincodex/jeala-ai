import {imports} from "@/util/imports.ts";
import {SliderContainer} from "@/component/container/SliderContainer.tsx";
import  ChevronLeft  from '@/assets/icon/chevron-left.svg'
import  ChevronRight  from '@/assets/icon/chevron-right.svg'
import {useRef} from "react";
import Slider from "react-slick";

export const FeedbackSection = ()=>{
    const sliderRef = useRef<Slider>(null)

    const settings = {
        dots: false,
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
        // className:'gap-20'
    }


    function prev() {
        (sliderRef as any).slickPrev();
    }

    function next() {
        (sliderRef as any).slickNext();
    }
    return(
        <section className={'w-full py-18'}>
            <div className={'flex justify-center mb-16'}>
                <span className={'text-[60px] font-urbanist font-semibold rotate-12'}>"</span>
                <h2 className={'text-center leading-[70px] mt-5 ml-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-150 to-primary-200 text-[60px] font-urbanist font-semibold'}>
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
                                <div key={index} className={'h-[400px] w-[611px] border border-red-500 p-8 '}>
                                    <h2 className={'text-[24px] font-lexend font-normal leading-[29px]'}>
                                        Head of Research at Datacorp
                                    </h2>
                                    <p>
                                        Dr, Morah Thankgod
                                    </p>
                                    <div className={'flex'}>
                                        {
                                            Array(5).fill('').map((_, index) => <img key={index}
                                                                                     src={imports.icon.starOutline}
                                                                                     alt={''}/>)
                                        }
                                    </div>

                                    <h2 className={'text-[18px] font-lexend font-light leading-[24px] text-primary-50 my-5'}>
                                        Data Analytics Transformed
                                    </h2>

                                    <p className={'text-[18px] font-lexend font-light '}>
                                        Our AI solutions have revolutionized our data analysis capabilities, enabling
                                        deeper
                                        insights
                                        and more accurate decision-making. Transform your approach with advanced,
                                        efficient
                                        analytics.
                                    </p>

                                </div>
                            )
                        })
                    }
                </SliderContainer>
            <div className={'flex gap-10 w-full justify-end pt-10 pr-10'}>
                <ChevronLeft onClick={prev} className={'cursor-pointer'} color={'black'} />
                <ChevronRight onClick={next} className={'cursor-pointer'} color={'black'} />
            </div>

                {/*</div>*/}

        </section>
    )
}