import {AuthLayout} from "@/view/layout/AuthLayout.tsx";
import {BaseInput} from "@/component/input/BaseInput.tsx";
import {DefaultCheckbox} from "@/component/checkbox/DefaultCheckbox.tsx";
import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import {RouteUtil} from "@/util/RouteUtil.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

export const LoginScreen = () => {
    const routeUtil = RouteUtil()

    function handleSubmit(){
        routeUtil.overview()
    }
    const themeState = useSelector((state: RootState) => state.theme);


    return (
        <AuthLayout>
            <h2 className={'text-[38px] text-center text-primary-100 mb-8 font-bold'}>Welcome to Jeala AI</h2>
            <div className={'flex flex-col items-start  justify-center gap-7'}>
                <BaseInput label={'Username'} inputType={'border'} className={'w-full h-[60px]'}/>
                <BaseInput label={'Password'} inputType={'border'} className={'w-full h-[60px]'}/>
                <div className={'flex items-center justify-between w-full'}>
                    <DefaultCheckbox label={'Remember me'}/>
                    <a href="#"><p className={`text-[14px] font-medium ${themeState.theme == 'dark' && 'text-white'}`}>Forgot Password?</p></a>
                </div>
            </div>
            <DefaultButton onClick={handleSubmit} size={'medium'} className={'w-full my-5 text-[20px]'}>Log In</DefaultButton>
            <p onClick={RouteUtil().register} className={`text-center text-[19px] cursor-pointer ${themeState.theme == 'dark' && 'text-white'}`}>Don’t have an account? <span className={'text-primary-100 font-medium'}>Get Started</span></p>
        </AuthLayout>
    )
}