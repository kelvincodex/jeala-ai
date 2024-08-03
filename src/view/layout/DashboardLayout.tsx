import {DefaultButton} from "@/component/button/DefaultButton.tsx";
import RoundedPlus from "@/assets/icon/rounded-plus.svg";
import {SidebarList} from "@/component/list/SidebarList.tsx";
import AlarmIcon from "@/assets/icon/alarm-icon.svg";
import SupportIcon from "@/assets/icon/support-icon.svg";
import ToggleSide from "@/assets/icon/toggle-sidebar.svg";
import ShareIcon from "@/assets/icon/share.svg";
import BellIcon from "@/assets/icon/bell-icon.svg";
import {BaseAvatar} from "@/component/avatar/BaseAvatar.tsx";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {base} from "@/store/module/base.ts";
import {ModalConstant} from "@/util/constant/ModalConstant.ts";

interface DashboardLayoutProps {
    children?: React.ReactNode;
}
export const DashboardLayout = ({children}: DashboardLayoutProps) => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(true)
    const dispatch = useDispatch();
    const items = [
        {
            label: 'Today',
            items: [
                {
                    label: 'New Project',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'Physics help',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'What is the beginning',
                    action: ()=>{},
                    value: ""
                },
            ]
        },
        {
            label: 'Yesterday',
            items: [
                {
                    label: 'Where Is Nigeria Located',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'What is the political statue of Kenya',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'How can i get a client online',
                    action: ()=>{},
                    value: ""
                },
            ]
        },
        {
            label: 'Yesterday',
            items: [
                {
                    label: 'Where Is Nigeria Located',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'What is the political statue of Kenya',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'How can i get a client online',
                    action: ()=>{},
                    value: ""
                },
            ]
        },
        {
            label: 'Yesterday',
            items: [
                {
                    label: 'Where Is Nigeria Located',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'What is the political statue of Kenya',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'How can i get a client online',
                    action: ()=>{},
                    value: ""
                },
            ]
        },
        {
            label: 'Yesterday',
            items: [
                {
                    label: 'Where Is Nigeria Located',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'What is the political statue of Kenya',
                    action: ()=>{},
                    value: ""
                },
                {
                    label: 'How can i get a client online',
                    action: ()=>{},
                    value: ""
                },
            ]
        },
    ]

    function handleShare(){
        dispatch(base.mutation.setModal({show: true, component: ModalConstant.shareModal}))
    }

    return (
        <div className={'flex'}>
            <div
                className={`h-screen border  ${openSidebar ? 'w-[260px]' : 'w-[0px]'} transition-[width] duration-300 ease-in-out flex flex-col items-center justify-center`}>
                <div
                    className={`flex flex-col h-[calc(90%+60px)]  px-5 w-full ${!openSidebar && 'hidden'}  overflow-hidden`}>
                    <div>
                        <DefaultButton size={'medium'} className={'w-full'}><RoundedPlus className={'w-[25px]'} color={'white'}/>New
                            Project</DefaultButton>
                        <h1 className={'font-light text-[20px]'}>Explore Jeala</h1>
                    </div>

                    <div className={'flex-1  overflow-y-auto flex flex-col gap-3 pb-3'}>
                        {
                            items.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h2 className={'font-medium leading-[25px] text-[18px]'}>{item.label}</h2>
                                        {
                                            item.items.map((value, index) => {
                                                return (
                                                    <SidebarList key={index}>{value.label}</SidebarList>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={'mt-auto'}>
                        <h1 className={'font-light text-[15px] cursor-pointer leading-[30px] mb-2 flex items-center gap-2'}>
                            <AlarmIcon className={'w-[15px]'}/>Notification</h1>
                        <h1 className={'font-light text-[15px] cursor-pointer  flex leading-[30px] items-center gap-2'}>
                            <SupportIcon className={'w-[15px]'} />Support
                        </h1>

                        <DefaultButton size={'medium'} buttonType={'outline'} className={'w-full mt-2 border-primary-150'}>
                            <RoundedPlus className={'w-[25px]'}
                            color={'#5B91F5'}/>Upgrade</DefaultButton>
                    </div>
                </div>
            </div>
            <div className={'flex-1 flex  items-center justify-center  h-screen '}>
                <div className={'w-[95%] h-full flex flex-col items-center justify-center gap-10'}>
                    <div className={'flex items-center justify-between h-[60px] w-full'}>
                        <ToggleSide className={'cursor-pointer w-[30px]'} onClick={() => setOpenSidebar(!openSidebar)}/>
                        <div className={'flex items-center gap-1'}>

                            <DefaultButton onClick={handleShare} size={'small'} className={'!h-[30px]'}>Share <ShareIcon className={'w-[25px]'} /></DefaultButton>

                            <DefaultButton size={'small'} className={'mr-3'} buttonType={'outline'}><ShareIcon
                                className={'rotate-[-90deg] w-[25px]'}/> Logout </DefaultButton>
                            <BellIcon className={'w-[25px] cursor-pointer'}/>
                            <BaseAvatar size={30} />
                        </div>
                    </div>
                    <div className={'rounded-[20px] h-[calc(90%-60px)] w-full'}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}