import {importsUtil} from "@/util/importsUtil.ts";
import {SliderContainer} from "@/component/container/SliderContainer.tsx";

export const PartnershipSection = ()=>{
    const logos =[
        importsUtil.image.upwork,
        importsUtil.image.upwork,
        importsUtil.image.upwork,
        importsUtil.image.meta,
        importsUtil.image.meta,
        importsUtil.image.meta,
        importsUtil.image.attentive,
        importsUtil.image.attentive,
        importsUtil.image.attentive,
    ]

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,

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
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
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
    }
    return (
        <section className={'w-full py-10 md:py-24'}>
            <SliderContainer settings={settings}>
                {
                    logos.map((logo, index)=> (
                        <div key={index}>
                            <div className={'md:w-[200px] max-w-[150px] md:h-[50px] max-h-[40px] mx m-auto'}>
                                <img className={'w-full h-full '} alt={''} src={logo}/>
                            </div>
                        </div>
                    ))
                }
            </SliderContainer>
        </section>
    )
}