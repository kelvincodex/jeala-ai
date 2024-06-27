import {Button, Input} from "@mui/material";

export const WaitlistSection = ()=>{
    return (
        <section className={' bg-primary-100 py-24'}>
            <div className={'flex flex-col items-center container-responsive'}>
                <h2 className={'text-center font-urbanist font-semibold mb-20 text-white capitalize text-[60px] leading-[70px]'}>
                    secure your spot on <br/> the Jeala AI waitlist!
                </h2>

                <div
                    className={'w-[70%] h-[120px] flex justify-between items-center px-10 overflow-hidden rounded-[27px] border gap-10'}>
                    <Input  placeholder={'Email Address'} className={'flex-grow !border-b-0'}/>
                    <Button className={'w-[212px] h-[70px] rounded'} variant={'contained'}>Join waitlist</Button>
                </div>
            </div>
        </section>
    )
}