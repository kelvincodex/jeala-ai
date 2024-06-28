import {CapabilitiesCard} from "@/component/card/CapabilitiesCard.tsx";
import {CapabilitiesData} from "@/util/data/CapabilitiesData.ts";

export const CapabilitiesSection=()=>{

    return (
        <section className={'w-full md:py-24 py-10 md:mt-32 mt-16 bg-capability'}>
            <div className={'container-responsive flex flex-col md:gap-20 gap-10 items-center'}>
                <h2 className={`text-center hidden md:block`}>
                    AI Capabilities That Transform <br/> Your Workflow
                </h2>
                <h2 className={`text-center  md:hidden`}>
                    AI Capabilities That <br/> Transform Your Workflow
                </h2>

                <div
                    className={'grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 grid-flow-row gap-5 md:w-[90%] m-auto'}>
                    {
                        CapabilitiesData.map((item, index) =>
                        {
                            const isFirst = index === 0
                            const isSecond = index === 1
                            const isThird = index === 2
                            const isLast = index === (CapabilitiesData.length - 1)

                            const firstClass: string = 'col-start-1 row-span-2'
                            const lastClass: string = ''
                            const secondClass: string = ''
                            const thirdClass: string = 'row-span-2'
                            return (
                                <CapabilitiesCard key={index} containerClassName={`${isFirst ? firstClass : isLast ? lastClass : isSecond ?  secondClass : isThird ? thirdClass :  '' }`} index={index} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}