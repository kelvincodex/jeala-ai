import {AuthLayout} from "@/view/layout/AuthLayout.tsx";
import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import {OtpInput} from "@/component/input/OtpInput.tsx";
import {useState} from "react";

export const VerifyEmailAddressScreen = () => {
    const [otp, setOtp] = useState<string>("")

    return (
        <AuthLayout>
            <h2 className={'text-[38px] text-center text-primary-100 font-bold'}>Verify your Email Address</h2>
            <p className={'mb-8 text-center'}>Enter the Five Digit code sent to you email <br/> <span className={'text-primary-100'}>Iniisaac20@gmail.com</span></p>
            <div className={'flex flex-col items-start  justify-center'}>
                <OtpInput onChangeText={setOtp} otp={otp} />
                <div className={' w-full'}>
                    <a href="#" className={'text-center'}><p className={'text-[18px] text-gray-500'}>Resend code</p></a>
                </div>
            </div>
            <DefaultButton size={'medium'} className={'w-full mt-10 text-[20px]'}>Verify Code</DefaultButton>
        </AuthLayout>
    )
}