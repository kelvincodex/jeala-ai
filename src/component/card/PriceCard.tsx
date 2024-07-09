import {importsUtil} from "@/util/importsUtil.ts";
import {PriceData} from "@/util/data/PriceData.ts";
import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface PriceCardProps {
    item: PriceData
}

export const PriceCard = ({item}: PriceCardProps)=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <motion.div
            variants={FramerConfigUtil.stagChildren}
            className={' shadow min-h-[500px]  flex flex-col rounded-lg  p-7 gap-0'}>
            <div className={''}>
                <h2 className={`md:text-[28px] text-[23px] font-poppins-medium ${themeState.theme == 'light' ? 'text-black' : 'text-white'}  md:leading-[31px] leading-[25px] capitalize`}>
                    {item.title}
                </h2>
                <h2 className={`text-primary-100 font-lexend ${themeState.theme == 'light' ? 'text-black' : 'text-white'} font-normal md:leading-[45px] leading-[35px] md:text-[28px] text-[20px] capitalize`}>
                    USD ${item.price}
                </h2>
            </div>

            {/*<Button  className={'md:!py-4 !py-2 md:!my-8 !my-5 !text-[28px] !font-poppins'}*/}
            {/*        variant="contained">Current plan</Button>*/}

            <DefaultButton  className={'md:my-8 my-3 md:btn-lg btn-md md:text-[25px] text-[20px]'}>Current plan</DefaultButton>

            {
                item.tags?.map((value, index)=>{
                    return (
                        <div key={index} className={'flex items-start my-2 '}>
                            {
                                themeState.theme == 'light' ?
                                    <importsUtil.icon.customiseMark color={'#060C2C'}
                                                                    className={'md:min-w-10 min-w-5 md:min-h-10 min-h-5'}/> :
                                    <importsUtil.icon.customiseMark color={'#fff'}
                                                                    className={'md:min-w-10 min-w-5 md:min-h-10 min-h-5'}/>

                            }
                            <p className={`md:text-[18px] text-[14px] ${themeState.theme == 'light' ? 'text-black' : 'text-white'}`}>
                                {value}
                            </p>
                        </div>
                    )
                })
            }


        </motion.div>
    )
}