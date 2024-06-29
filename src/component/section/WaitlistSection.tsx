import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import {BaseInput} from "@/component/input/BaseInput.tsx";
import EmailIcon from "@/assets/icon/light-email.svg"
export const WaitlistSection = ()=>{
    return (
        <section className={' bg-primary-100 md:py-24 py-20'}>
            <div

                className={'flex flex-col items-center container-responsive'}>
                <h2 className={'text-center font-urbanist font-semibold mb-20 text-white capitalize  '}>
                    secure your spot on <br/> the Jeala AI waitlist!
                </h2>

                <div
                    className={'w-full md:w-full lg:w-[70%] md:h-[90px] h-[70px]  flex justify-between items-center  bg-white  px-1 md:px-3 overflow-hidden rounded-[20px] border gap-3'}>
                    <BaseInput  leftIcon={EmailIcon} className={'flex-grow h-full bg-transparent placeholder:text-primary-100 w-10'} placeholder={'Email Address'} />
                    {/*<Button className={'md:!py-5 !py-2 md:!px-10 !px-5  rounded !text-[10px] md:!text-[18px]'} variant={'contained'}></Button>*/}
                    <DefaultButton  className={'lg:btn-lg md:btn-md btn-sm text-[13px]'}>Join waitlist</DefaultButton>
                </div>
            </div>
        </section>
    )
}