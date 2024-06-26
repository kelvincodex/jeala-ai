import {ForwardedRef, forwardRef, ReactNode} from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface SliderContainerProps {
    settings?: object,
    children: ReactNode,
    containerClassName?: string,
    // containerClassName?: HTMLProps<HTMLElement>["className"],
    infinite?: boolean,
}
export const SliderContainer = forwardRef(({settings, containerClassName, children, infinite}: SliderContainerProps, ref: ForwardedRef<any> ) => {

    const init_settings = {
        dots: true,
        infinite: infinite ?? false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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