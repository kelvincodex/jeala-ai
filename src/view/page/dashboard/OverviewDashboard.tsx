import ToggleSide from "@/assets/icon/toggle-sidebar.svg"
import ShareIcon from "@/assets/icon/share.svg"
import BellIcon from "@/assets/icon/bell-icon.svg"
import AlarmIcon from "@/assets/icon/alarm-icon.svg"
import SupportIcon from "@/assets/icon/support-icon.svg"
import  RoundedPlus from '@/assets/icon/rounded-plus.svg'
import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import {BaseAvatar} from "@/component/avatar/BaseAvatar.tsx";
import {useState} from "react";
import {SidebarList} from "@/component/list/SidebarList.tsx";
export const OverviewDashboard = ()=>{
    const [openSidebar, setOpenSidebar] = useState<boolean>(true)


    return (
       <div className={'flex'}>
           <div className={`h-screen border  ${openSidebar ? 'w-[300px]' : 'w-[0px]'} transition-[width] duration-300 ease-in-out flex flex-col items-center justify-center`}>
               <div className={`flex flex-col h-[calc(90%+60px)]  px-5 w-full ${!openSidebar && 'hidden' }  overflow-hidden`}>
                   <div>
                       <DefaultButton size={'large'} className={'w-full'}><RoundedPlus color={'white'} />New Project</DefaultButton>
                       <h1 className={'font-light text-[24px] mb-5'}>Explore Jeala</h1>
                   </div>

                   <div className={'flex-1  overflow-auto'}>
                       <ul className={' flex flex-col gap-3'}>
                           <li className={'font-medium mb-3'}>Today</li>
                           <SidebarList active>New Project</SidebarList>
                           <SidebarList>Physics help offered</SidebarList>
                       </ul>
                   </div>

                   <div className={'mt-auto'}>
                       <h1 className={'font-light text-[24px] cursor-pointer leading-[40px] flex items-center gap-2'}><AlarmIcon />Notification</h1>
                       <h1 className={'font-light text-[24px] cursor-pointer  flex items-center gap-2'}><SupportIcon />Support</h1>

                       <DefaultButton size={'large'} buttonType={'outline'} className={'w-full'}><RoundedPlus color={'#5B91F5'} />Upgrade</DefaultButton>
                   </div>
               </div>
           </div>
           <div className={'flex-1 flex  items-center justify-center  h-screen '}>
             <div className={'w-[95%] h-full flex flex-col items-center justify-center gap-10'}>
                   <div className={'flex items-center justify-between h-[60px] w-full'}>
                       <ToggleSide className={'cursor-pointer'} onClick={()=>setOpenSidebar(!openSidebar)} />
                       <div className={'flex items-center gap-1'}>
                           <DefaultButton size={'medium'}>Share <ShareIcon/></DefaultButton>
                           <DefaultButton size={'medium'} className={'mr-3'} buttonType={'outline'}><ShareIcon
                               className={'rotate-[-90deg]'}/> Logout </DefaultButton>
                           <BellIcon/>
                           <BaseAvatar/>
                       </div>
                   </div>
                   <div className={'shadow rounded-[20px] h-[calc(90%-60px)] w-full'}>
                       <h2>Content</h2>
                   </div>
               </div>
           </div>
       </div>
    )
}