import {DefaultAccordion} from "@/component/accordion/DefaultAccordion.tsx";
import {FAQData} from "@/util/data/FAQData.ts";

export const FAQSection = ()=>{
    return (
        <section className={'py-20 bg-faq h-auto'}>
            <div className={'container-responsive flex flex-col items-center'}>
                <h2 className={'font-urbanist font-semibold mb-5  text-[40px] leading-[60px]'}>
                    Frequently Asked Question
                </h2>

                <div className={'w-[50%] m-auto'}>
                    {
                        FAQData.map((value,index)=>{
                            return (
                                <DefaultAccordion key={index} text={value.text} title={value.title}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}