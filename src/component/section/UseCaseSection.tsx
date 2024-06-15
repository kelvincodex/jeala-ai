import {imports} from "@/util/imports.ts";

export const UseCaseSection = ()=>{

    const items = [
        {
            image: imports.image.education,
            title: 'Health'
        },
        {
            image: imports.image.gaming,
            title: 'Education'
        },
        {
            image: imports.image.engineer,
            title: 'Gaming'
        },
        {
            image: imports.image.health,
            title: 'Engineering'
        },
    ]

    return (
        <section className={'px-10 flex justify-center items-center'}>
            <div className={' grid grid-cols-2 gap-10'}>
                {
                    items.map((item, index) => (
                        <div key={index} className="h-[510px] w-[660px]  flex flex-col justify-end relative">
                            <img src={item.image} className={'object-cover absolute w-full h-full z-[-999]'} alt={''}/>
                            <h2 className={'z-[999] text-white-100 font-poppins-b font-bold text-[70px] leading-[105px] ml-3'}>
                                {item.title}
                            </h2>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}