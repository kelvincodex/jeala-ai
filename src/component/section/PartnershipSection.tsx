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
        <section className={'overflow-x-auto flex gap-24 my-20 px-10 items-center justify-center pl-32'}>
            {
                logos.map(logo=> (
                    <img className={'w-[200px] h-[44px]'} alt={''} src={logo} />
                ))
            }
        </section>
    )
}