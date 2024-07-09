import {importsUtil} from "@/util/importsUtil.ts";
import { motion } from "framer-motion";
import {FramerConfigUtil} from "@/util/FramerConfigUtil.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

export const FeedbackContainerCard = ()=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <motion.div
            variants={FramerConfigUtil.stagChildren}
            className={'md:h-[350px] min:h-[300px] max:h-auto shadow border px-8 py-10 mx-4 rounded-xl'}>
            <h2 className={`md:text-[24px] text-[18px] ${themeState.theme == 'light' ? 'text-black' : 'text-white'} font-lexend font-normal md:leading-[29px] leading-[25px] mb-2`}>
                Head of Research at Datacorp
            </h2>
            <p className={`font-light md:text-[24px] ${themeState.theme == 'light' ? 'text-black' : 'text-white'} text-[18px] md:leading-[29px] leading-[25px]`}>
                Dr, Morah Thankgod
            </p>
            <div className={'flex'}>
                {
                    Array(5).fill('').map((_, index) => {
                        return (
                            <importsUtil.icon.starOutline key={index}/>
                        )
                    })
                }
            </div>

            <h2 className={`md:text-[18px] text-[14px] font-lexend ${themeState.theme == 'light' ? 'text-black' : 'text-white'} font-light md:leading-[24px] leading-[20px] text-primary-50 md:my-5 my-3`}>
                Data Analytics Transformed
            </h2>

            <p className={`md:text-[18px] text-[14px] ${themeState.theme == 'light' ? 'text-black' : 'text-white'} font-lexend font-light leading-6`}>
                Our AI solutions have revolutionized our data analysis capabilities, enabling
                deeper
                insights
                and more accurate decision-making. Transform your approach with advanced,
                efficient
                analytics.
            </p>

        </motion.div>
    )
}