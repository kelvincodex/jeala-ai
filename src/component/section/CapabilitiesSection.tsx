import {CapabilitiesCard} from "@/component/card/CapabilitiesCard.tsx";
import {CapabilitiesData} from "@/util/data/CapabilitiesData.ts";

export const CapabilitiesSection=()=>{

    return (
        <section className={'w-full py-24 mt-32'}>
            <div className={'container-responsive flex flex-col gap-20 items-center'}>
                <h2 className={`text-center `}>
                    AI Capabilities That Transform <br/> Your Workflow
                </h2>

                <div className={'grid grid-cols-2 grid-flow-row gap-5 w-[80%] m-auto'}>
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