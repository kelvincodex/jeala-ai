import React, { InputHTMLAttributes, SVGProps} from "react";

interface BaseInputProps  {
    leftIcon: React.FC<SVGProps<SVGSVGElement>> | string,
    className?: string,
    iconSize: string
}
export const BaseInput = ({leftIcon: LeftIcon, iconSize, className, ...props}: BaseInputProps & InputHTMLAttributes<HTMLInputElement>)=>{

    return (
        <div className={'w-full h-full flex items-center gap-2'}>
            {
                LeftIcon && (
                    <LeftIcon width={iconSize} height={iconSize}  />
                )
            }
            <input
                className={`outline-0 placeholder:text-black font-urbanist  ${className}`} {...props} />

        </div>
    )
}

BaseInput.defaultProps = {
    iconSize: '50px'
}