import {Button} from "@mui/material";
import {imports} from "@/util/imports.ts";
import {PriceData} from "@/util/data/PriceData.ts";

interface PriceCardProps {
    item: PriceData
}

export const PriceCard = ({item}: PriceCardProps)=>{

    return (
        <div className={'border min-h-[500px] flex flex-col rounded-lg  p-7 gap-0'}>
            <div className={''}>
                <h2 className={'text-[28px]   font-poppins-bold leading-[31.5px] capitalize'}>
                    {item.title}
                </h2>
                <h2 className={'text-primary-100 font-lexend font-normal leading-[51.84px] text-[28px] capitalize'}>
                    USD ${item.price}
                </h2>
            </div>

            <Button size={'medium'} className={'!py-4 !my-8'}
                    variant="contained">Current plan</Button>

            {
                item.tags?.map((value, index)=>{
                    return (
                        <div key={index} className={'flex items-start  my-2'}>
                            <imports.icon.customiseMark className={'min-w-10 min-h-10'}/>
                            <p className={'text-[18px]'}>
                                {value}
                            </p>
                        </div>
                    )
                })
            }


        </div>
    )
}