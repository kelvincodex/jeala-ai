import React, { InputHTMLAttributes, SVGProps} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.FC<SVGProps<SVGSVGElement>> | string,
    rightIcon?: React.FC<SVGProps<SVGSVGElement>> | string,
    className?: string,
    containerClassName?: string,
    rightIconSize?: string,
    leftIconSize?: string,
    label?: string,
    inputType?: 'outline'|'border'|'normal',
}
export const BaseInput = ({leftIcon: LeftIcon, rightIcon: RightIcon, containerClassName, label, inputType='normal', rightIconSize='50px', leftIconSize='50px', className, ...props}: BaseInputProps)=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <div className={'w-full h-full relative '}>
            {
                label && (
                    <label className={`font-urbanist  font-light px-1 ${themeState.theme == 'light' ? 'bg-white' : 'bg-dark-400 text-white'}  absolute -top-3 left-5`}>{label}</label>
                )
            }
            <div
                className={`flex  ${inputType == 'border' && 'border rounded-xl overflow-hidden'} items-center px-2 gap-2 w-full h-full ${containerClassName}`}>

                {
                    LeftIcon && (
                        <LeftIcon width={leftIconSize} height={leftIconSize}/>
                    )
                }
                <input
                    className={`focus:outline-0 grow focus:border-0 border-0 bg-transparent  placeholder:text-black font-urbanist  ${className}`} {...props} />
                {
                    RightIcon && (
                        <RightIcon width={rightIconSize} height={rightIconSize}/>
                    )
                }
            </div>
        </div>
    )
}
