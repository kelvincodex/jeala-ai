import {Button} from "@mui/material";

export const WaitlistSection = ()=>{
    return (
        <section className={' bg-primary-100 md:py-24 py-20'}>
            <div className={'flex flex-col items-center container-responsive'}>
                <h2 className={'text-center font-urbanist font-semibold mb-20 text-white capitalize  '}>
                    secure your spot on <br/> the Jeala AI waitlist!
                </h2>

                <div
                    className={'w-full md:w-[70%] md:h-[90px] h-[70px] flex justify-between items-center bg-white px-5 md:px-10 overflow-hidden rounded-[20px] border gap-10'}>
                    <input  placeholder={'Email Address'} className={'flex-grow h-full  bg-transparent  outline-0 placeholder:text-black'} />
                    <Button className={'md:!py-5 !py-2 md:!px-10 !px-5  rounded !text-[10px] md:!text-[18px]'} variant={'contained'}>Join waitlist</Button>
                </div>
            </div>
        </section>
    )
}