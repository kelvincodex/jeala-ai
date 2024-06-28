import {imports} from "@/util/imports.ts";
import {SliderContainer} from "@/component/container/SliderContainer.tsx";

export const PartnershipSection = ()=>{
    const logos =[
        imports.image.upwork,
        imports.image.upwork,
        imports.image.upwork,
        imports.image.meta,
        imports.image.meta,
        imports.image.meta,
        imports.image.attentive,
        imports.image.attentive,
        imports.image.attentive,
    ]

    const settings = {
        dots: false,
        slidesToShow: 5.5,
        slidesToScroll: 5.5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
                    initialSlide: 1
                }
            }
        ]
    }
    return (
        <section className={'w-full'}>
            <SliderContainer settings={settings}>
                {
                    logos.map((logo, index)=> (
                        <div key={index}>
                            <div className={'md:w-[200px] w-[100px] md:h-[50px] h-[40px] m-auto'}>
                                <img className={'w-full h-full'} alt={''} src={logo}/>
                            </div>
                        </div>
                    ))
                }
            </SliderContainer>
        </section>
    )
}