import React, {ButtonHTMLAttributes} from "react";

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?: string,
    size?: 'large'|'small'|'medium',
    buttonType?: 'outline'|'normal'
}
export const DefaultButton = ({children, buttonType='normal', className, size='small', ...props}: DefaultButtonProps)=>{

    const smallClassName: string = size == 'small' ?  'btn-sm text-[12px]' : size == 'medium' ? 'btn-md text-[16px]' : 'btn-lg text-[18px]'
    return (
        <button className={`btn !px-1 font-poppins ${buttonType == 'outline' ? 'border-[2px] bg-white text-black' : 'border-0 bg-primary-100 hover:bg-primary-50 text-white'}  ${smallClassName}  ${className}`} {...props}>{children}</button>
)
}
