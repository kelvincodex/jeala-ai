import {imports} from "@/util/imports.ts";

export const FeedbackSection = ()=>{

    return(
        <section className={'w-full py-24'}>
            <div className={'flex justify-center my-10'}>
                <span className={'text-[60px] font-urbanist font-semibold rotate-12'}>"</span>
                <h2 className={'text-center leading-[70px] mt-5 ml-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-150 to-primary-200 text-[60px] font-urbanist font-semibold'}>
                    What Our Users Are <br/> Saying
                </h2>
                <span className={'text-[60px] font-urbanist font-semibold rotate-12  text-primary-200'}>"</span>
            </div>

            <div className={'overflow-x-auto flex gap-10  items-center justify-center w-full pl-24'}>
                    {
                        Array(5).fill('').map((_, index) => {

                            return (
                                <div key={index} className={'min-h-[400px] min-w-[611px] border p-8'}>
                                    <h2 className={'text-[24px] font-lexend font-normal leading-[29px]'}>
                                        Head of Research at Datacorp
                                    </h2>
                                    <p>
                                        Dr, Morah Thankgod
                                    </p>
                                    <div className={'flex'}>
                                        {
                                            Array(5).fill('').map((_, index) => <img key={index}
                                                                                     src={imports.icon.starOutline}
                                                                                     alt={''}/>)
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
                        })
                    }
                </div>

        </section>
    )
}