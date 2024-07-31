import React, {SVGProps} from "react";

interface BaseAvatarProps {
    type?: 'svg'|'image',
    icon?: React.FC<SVGProps<SVGAElement>>,
    src?: any,
    size?: number
}
export const BaseAvatar = ({type='svg',src, size=50, icon: Icon}: BaseAvatarProps)=>{
    return (
        <div className={'rounded-full border cursor-pointer'} style={{width: size, height: size}}>
            {
                type == 'svg' ?
                    Icon &&  <Icon /> :
                    <img alt={'avatar'} src={src}   />
            }
        </div>
    )
}