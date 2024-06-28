import {PriceCard} from "@/component/card/PriceCard.tsx";
import {imports} from "@/util/imports.ts";
import {priceData} from "@/util/data/PriceData.ts";

export const PricingSection = ()=>{
    return (
        <section className={' py-24'}>
            <div className={'container-responsive relative flex flex-col items-center justify-center'}>
                    <img className={'w-[200px] md:w-[400px] h-[200px] md:h-[400px] absolute -top-16 md:-top-40 md:left-40 -left-10'} src={imports.image.rocket} alt={''}/>
                <h2 className={'text-center font-semibold mb-10'}>
                    <span className={'text-primary-100'}>Go</span> Premium
                </h2>


                <div className={'w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10'}>
                    {
                        priceData.map((value, index) => {
                            return (
                                <PriceCard item={value} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}