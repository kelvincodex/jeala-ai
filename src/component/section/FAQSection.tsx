import {Button, Input} from "@mui/material";

export const FAQSection = ()=>{
    return (
        <section className={'flex flex-col items-center bg-primary-100 py-24'}>
            <h2 className={'text-center font-urbanist font-semibold mb-20 text-white text-[60px] leading-[70px]'}>
                secure your spot on the <br/> Jeala AI waitlist!
            </h2>

            <div className={'w-[70%] h-[120px] flex justify-between items-center px-10 overflow-hidden rounded-[27px] border'}>
                <Input  placeholder={'Email Address'} className={'flex-grow'} />
                <Button className={'w-[212px] h-[70px] rounded'} variant={'contained'}>Join waitlist</Button>
            </div>
        </section>
    )
}