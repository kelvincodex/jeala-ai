import {imports} from "@/util/imports.ts";

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
    return (
        <section className={'overflow-x-auto flex gap-32 my-20 items-center justify-center '}>
            {
                logos.map(logo=> (
                    <img className={'w-[228.1px] h-[47.69px]'} alt={''} src={logo} />
                ))
            }
        </section>
    )
}