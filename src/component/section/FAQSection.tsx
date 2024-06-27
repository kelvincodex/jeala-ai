import {DefaultAccordion} from "@/component/accordion/DefaultAccordion.tsx";
import {FAQData} from "@/util/data/FAQData.ts";

export const FAQSection = ()=>{
    return (
        <section className={'py-20 h-[800px] bg-faq overflow-y-scroll'}>
            <div className={'container-responsive flex flex-col items-center justify-center'}>
                <h2 className={'font-urbanist font-semibold mb-5'}>
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