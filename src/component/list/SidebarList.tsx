import MoreOne from "@/assets/icon/more-one-icon.svg";
import React, {useState} from "react";

interface SidebarListProps {
    active?: boolean,
    children?: React.ReactNode,
}

export const SidebarList = ({active = false, children}: SidebarListProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    return (
        <li onMouseEnter={()=> setIsFocused(true)} onMouseLeave={()=> setIsFocused(false)} className={`btn ${!active ? 'bg-transparent border-0 text-black' : 'bg-primary-20 text-primary-100'}   w-full flex justify-between  font-light text-[20px]`}>
            {children} {(active || isFocused) && <MoreOne/>}</li>
    )
}

