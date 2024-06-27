import {imports} from "@/util/imports.ts";

export const FeedbackContainerCard = ()=>{
    return (
        <div  className={'h-[400px] border px-8 py-10 mx-4'}>
            <h2 className={'text-[24px] font-lexend font-normal leading-[29px]'}>
                Head of Research at Datacorp
            </h2>
            <p>
                Dr, Morah Thankgod
            </p>
            <div className={'flex'}>
                {
                    Array(5).fill('').map((_, index) => {
                        return (
                            <imports.icon.starOutline key={index}/>
                        )
                    })
                }
            </div>

            <h2 className={'text-[18px] font-lexend font-light leading-[24px] text-primary-50 my-5'}>
                Data Analytics Transformed
            </h2>

            <p className={'text-[18px] font-lexend font-light '}>
                Our AI solutions have revolutionized our data analysis capabilities, enabling
                deeper
                insights
                and more accurate decision-making. Transform your approach with advanced,
                efficient
                analytics.
            </p>

        </div>
    )
}