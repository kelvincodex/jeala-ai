import {Button} from "@mui/material";
import {imports} from "@/util/imports.ts";

export const PricingSection = ()=>{
    return (
        <section className={'container-responsive'}>

            <h2 className={'text-center font-semibold'}>

                Go <span className={'text-primary-100'}>Premium</span>

            </h2>

            <div className={'border w-[500px] min-h-[700px] flex flex-col rounded-lg p-14 gap-0'}>
                <div className={'mb-20'}>
                    <h2 className={'text-[48px] my-10 font-poppins leading-[31.5px]'}>
                        Free
                    </h2>
                    <h2 className={'text-primary-100 font-lexend font-normal leading-[51.84px] text-[48px]'}>
                        USD $0 / Month
                    </h2>
                </div>

                <Button className={'!bg-primary-100 !h-[80px] !w-full !text-[36px] !font-poppins !leading-[54px]'}
                        variant="contained">Current plan</Button>

                <div className={'flex items-start pr-10 my-5'}>
                    <img src={imports.icon.customiseMark} alt={''}/>
                    <p>
                        Access to essential AI features
                    </p>
                </div>

                <div className={'flex items-start pr-10 my-5'}>
                    <img src={imports.icon.customiseMark} alt={''}/>
                    <p>
                        Access to essential AI features
                    </p>
                </div>

                <div className={'flex items-start pr-10 my-5'}>
                    <img src={imports.icon.customiseMark} alt={''}/>
                    <p>
                        Access to essential AI features
                    </p>
                </div>

                <div className={'flex items-start pr-10 my-5'}>
                    <img src={imports.icon.customiseMark} alt={''}/>
                    <p>
                        Access to essential AI features
                    </p>
                </div>
            </div>
        </section>
    )
}