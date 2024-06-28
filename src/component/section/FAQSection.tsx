import {DefaultAccordion} from "@/component/accordion/DefaultAccordion.tsx";
import {FAQData} from "@/util/data/FAQData.ts";

export const FAQSection = ()=>{
    return (
        <section className={'md:py-20 py-18 md:h-[800px] h-[600px] bg-faq'}>

            <div
                className={'container-responsive flex flex-col items-center h-full w-full justify-center '}>
                <h2 className={'font-urbanist font-semibold mb-5'}>
                    Frequently Asked Question
                </h2>
                <div className={'h-[500px] w-full overflow-y-scroll'}>
                    {
                        FAQData.map((value, index) => {
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