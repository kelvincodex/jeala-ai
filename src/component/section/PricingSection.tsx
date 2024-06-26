import {PriceCard} from "@/component/card/PriceCard.tsx";

export const PricingSection = ()=>{
    return (
        <section className={'container-responsive py-24'}>

            <h2 className={'text-center font-semibold mb-10'}>

                <span className={'text-primary-100'}>Pricing</span>& Plans

            </h2>
            <div className={'w-full grid grid-cols-2 place-items-center'} >
                {
                    Array(2).fill('').map((_, index) => {
                        return (
                            <PriceCard key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}