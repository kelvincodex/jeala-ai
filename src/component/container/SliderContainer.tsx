import {ForwardedRef, forwardRef, ReactNode} from "react";
import Slider from "react-slick";
// const  SlickSliderImport = import("react-slick")


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const SlickSlider = lazy(()=> SlickSliderImport)


interface SliderContainerProps {
    settings?: object,
    children: ReactNode,
    containerClassName?: string,
    // containerClassName?: HTMLProps<HTMLElement>["className"],
    infinite?: boolean,
}
export const SliderContainer = forwardRef(({settings, containerClassName, children}: SliderContainerProps, ref: ForwardedRef<any> ) => {

    const init_settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const final_settings = Object.assign(init_settings, settings)

    return(
            <Slider className={`${containerClassName}`} ref={ref} {...final_settings}>
                {children}
            </Slider>

    )
})