import React from "react";

interface DefaultButtonProps  {
    children: React.ReactNode,
    className?: string,
    size: 'large'|'small'|'medium'
}
export const DefaultButton = ({children, className, size}: DefaultButtonProps)=>{

    const smallClassName: string = size == 'small' ?  'btn-sm' : size == 'medium' ? 'btn-md' : 'btn-lg'
    return (
        <button className={`btn bg-primary-100 border-0 hover:bg-primary-50 text-white font-poppins ${smallClassName}  ${className}`}>{children}</button>

)
}

DefaultButton.defaultProps = {
    size: 'small'
}