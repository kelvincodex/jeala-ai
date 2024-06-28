import {importsUtil} from "@/util/importsUtil.ts";
import {PriceData} from "@/util/data/PriceData.ts";
import {DefaultButton} from "@/component/button/DefaultButton.tsx";

interface PriceCardProps {
    item: PriceData
}

export const PriceCard = ({item}: PriceCardProps)=>{

    return (
        <div className={'border min-h-[500px]  flex flex-col rounded-lg  p-7 gap-0'}>
            <div className={''}>
                <h2 className={'md:text-[28px] text-[23px] font-poppins-medium  md:leading-[31px] leading-[25px] capitalize'}>
                    {item.title}
                </h2>
                <h2 className={'text-primary-100 font-lexend font-normal md:leading-[45px] leading-[35px] md:text-[28px] text-[20px] capitalize'}>
                    USD ${item.price}
                </h2>
            </div>

            {/*<Button  className={'md:!py-4 !py-2 md:!my-8 !my-5 !text-[28px] !font-poppins'}*/}
            {/*        variant="contained">Current plan</Button>*/}

            <DefaultButton  className={'md:my-8 my-3 md:btn-lg btn-md md:text-[25px] text-[20px]'}>Current plan</DefaultButton>

            {
                item.tags?.map((value, index)=>{
                    return (
                        <div key={index} className={'flex items-start  my-2'}>
                            <importsUtil.icon.customiseMark className={'md:min-w-10 min-w-5 md:min-h-10 min-h-5'}/>
                            <p className={'md:text-[18px] text-[14px]'}>
                                {value}
                            </p>
                        </div>
                    )
                })
            }


        </div>
    )
}