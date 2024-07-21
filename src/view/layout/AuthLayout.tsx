import {DefaultLayout} from "@/view/layout/DefaultLayout.tsx";
import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}
export const AuthLayout = ({children}: AuthLayoutProps)=>{
    return (
        <DefaultLayout>
            <section className={'w-full h-screen flex flex-col items-center justify-center'}>
                <div className={'container h-[80%]  shadow rounded-xl'}>
                    <div className={'w-[480px]  h-fit mx-auto py-20'}>
                        {children}
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}