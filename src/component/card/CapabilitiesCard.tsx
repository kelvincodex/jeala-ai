
interface CapabilitiesCardProps {
    index: number,
    item: any,
    containerClassName?: string,
}
export const CapabilitiesCard = ({ item, containerClassName}: CapabilitiesCardProps)=>{
    
    return (
        <div
            className={`bg-white border rounded-lg flex flex-col  justify-center px-20 py-10 gap-5 ${containerClassName}`}>

            {
                item.icon && (
                    <item.icon className={'w-[40px] h-[40px] self-end'}/>
                )
            }
            <h2 className={'text-[30px] text-primary-100 leading-[35px]'}>
                {item.title}
            </h2>
            <p className={'text-[20px]   font-[200] leading-[37px]  text-black-200'}>
                {item.subTitle}
            </p>
        </div>
    )
}