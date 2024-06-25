import {DefaultAccordion} from "@/component/accordion/DefaultAccordion.tsx";

export const FAQSection = ()=>{
    return (
        <section className={'flex flex-col items-center py-24 bg-faq'}>
            <div className={'w-[50%] m-auto'}>
                <h2 className={' font-urbanist font-semibold mb-20  text-[60px] leading-[70px]'}>
                    Frequently Asked Question
                </h2>
                <div className={'w-full'}>
                    <DefaultAccordion title={'What is Jeala AI?'}/>
                    <DefaultAccordion title={'How does Jeala AI work?'} />
                    <DefaultAccordion title={'How accurate is Jeala AI?'} />
                    <DefaultAccordion title={'How does Jeala AI handle data privacy?'} />
                    <DefaultAccordion title={'What kind of support is available for Jeala AI users?'} />
                </div>
            </div>
        </section>
    )
}