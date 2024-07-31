import MoreOne from "@/assets/icon/more-one-icon.svg";
import React, {useState} from "react";

interface SidebarListProps {
    active?: boolean,
    children?: React.ReactNode,
}

export const SidebarList = ({active = false, children}: SidebarListProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    return (
        <div onMouseEnter={()=> setIsFocused(true)} onMouseLeave={()=> setIsFocused(false)}  className={`btn ${!active ? 'bg-transparent border-0' : 'bg-primary-20'} w-full flex min-w-0 items-center gap-2 justify-between`}>
            <p className={`${!active ? ' text-black' : ' text-primary-100'} text-[15px] font-light  flex-1 text-start whitespace-nowrap overflow-hidden text-ellipsis`}> {children}</p>{(active || isFocused) && <div className={'flex-shrink-0'}><MoreOne className={''}/></div> }</div>
    )
}

