import {DefaultLayout} from "@/view/layout/DefaultLayout.tsx";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface AuthLayoutProps {
    children: React.ReactNode;
}
export const AuthLayout = ({children}: AuthLayoutProps)=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <DefaultLayout>
            <section className={'w-full h-screen flex flex-col items-center justify-center'}>
                <div className={`container h-[80%] shadow  ${themeState.theme == 'dark' && 'shadow-white'}  rounded-xl`}>
                    <div className={'w-[480px]  h-fit mx-auto py-20'}>
                        {children}
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}