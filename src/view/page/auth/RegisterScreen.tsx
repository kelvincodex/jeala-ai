import {AuthLayout} from "@/view/layout/AuthLayout.tsx";
import {BaseInput} from "@/component/input/BaseInput.tsx";
import {DefaultCheckbox} from "@/component/checkbox/DefaultCheckbox.tsx";
import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import {RouteUtil} from "@/util/RouteUtil.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

export const RegisterScreen = () => {
    const routeUtil = RouteUtil()

    function useHandleSubmit(){
         routeUtil.verifyEmailAddress()
    }
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <AuthLayout>
            <h2 className={'text-[38px] text-center text-primary-100 mb-8 font-bold'}>Get Started with Jeala AI</h2>
            <div className={'flex flex-col items-start  justify-center gap-7'}>
                <BaseInput label={'Username'} inputType={'border'} className={'w-full h-[60px]'}/>
                <BaseInput label={'Email Address'} inputType={'border'} className={'w-full h-[60px]'}/>
                <BaseInput label={'Password'} inputType={'border'} className={'w-full h-[60px]'}/>
                <DefaultCheckbox label={'Remember me'}/>
            </div>
            <DefaultButton onClick={useHandleSubmit} size={'medium'} className={'w-full my-5 text-[20px]'}>Get Started</DefaultButton>
            <p onClick={RouteUtil().login} className={`text-center text-[19px] cursor-pointer ${themeState.theme == 'dark' && 'text-white'}`}>Already have an account? <span className={'text-primary-100'}>Log In</span></p>
        </AuthLayout>
    )
}