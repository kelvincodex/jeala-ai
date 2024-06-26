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

    }
    return (
        <section className={'my-20 w-full'}>
        {/*<section className={'overflow-x-auto flex gap-24 my-20 px-10  pl-32'}>*/}
            <SliderContainer settings={settings}>
                {
                    logos.map((logo, index)=> (
                        <div key={index}>
                            <img  className={'w-[200px] h-[44px] m-auto'} alt={''} src={logo}/>
                        </div>
                    ))
                }
            </SliderContainer>
        </section>
    )
}