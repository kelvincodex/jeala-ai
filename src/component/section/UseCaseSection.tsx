import {UseCaseData} from "@/util/data/UseCaseData.ts";

export const UseCaseSection = ()=>{


    return (
        <section className={'py-10 '}>
            <div className={'flex flex-col justify-center items-center container-responsive'}>
                <div className={' grid grid-cols-4 gap-10'}>
                    {
                        UseCaseData.map((item, index) => (
                            <div key={index}
                                 className="h-[400px] w-[600px] col-span-2 flex flex-col justify-end relative">
                                <img src={item.image} className={'object-cover absolute w-full h-full z-[-999]'}
                                     alt={''}/>
                                <h2 className={'z-[999] text-white-100 font-poppins-b font-bold text-[70px] leading-[105px] ml-3'}>
                                    {item.title}
                                </h2>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}