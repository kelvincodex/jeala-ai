import React, {SVGProps} from "react";

interface BaseAvatarProps {
    type: 'svg'|'image',
    icon: React.FC<SVGProps<SVGAElement>>
}
export const BaseAvatar = ({type, icon: Icon}: BaseAvatarProps)=>{
    return (
        <div className={'rounded-full '}>
            {
                type == 'svg' ?
                    <Icon /> :
                    <img alt={''} />
            }
        </div>
    )
}