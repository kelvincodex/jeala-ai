interface CapabilitiesCardProps {
    index: number,
    item: any
}
export const CapabilitiesCard = ({index, item}: CapabilitiesCardProps)=>{



    // ${
    //            index === 0 ? 'row-span-2 col-start-1' :
    //                index === 1 ? ' col-start-2 row-start-1' :
    //                    index === 2 ? 'row-start-3 col-start-1' :
    //                        index === 3 ? 'row-span-2 row-start-3 col-start-2' : ''
    //        }

    return (
        <div
            key={index}
            // className={`min-w-[560px] bg-white border ${(index == 0 || index == (items.length - 1)) ? 'row-span-2' : 'row-span-2'} rounded-lg flex flex-col  justify-center px-14 py-10 gap-5`}>
            className={`md:w-[560px] w-full bg-white border rounded-lg flex flex-col  justify-center px-14 py-10 gap-5`}>

            {
                item.icon && (
                    <item.icon className={'w-[69.12px] h-[69.12px] self-end'}/>
                )
            }

            <h2 className={'md:text-[36px] text-[26px] text-primary-100 leading-[35px]'}>
                {item.title}
            </h2>
            <p className={'md:text-[26px] text-[18px]  font-[200] leading-[37px]  text-black-200'}>
                {item.subTitle}
            </p>
        </div>
    )
}