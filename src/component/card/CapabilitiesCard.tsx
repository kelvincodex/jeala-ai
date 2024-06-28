
interface CapabilitiesCardProps {
    index: number,
    item: any,
    containerClassName?: string,
}
export const CapabilitiesCard = ({ item, containerClassName}: CapabilitiesCardProps)=>{

    return (
        <div
            className={`bg-white border rounded-lg flex flex-col  justify-center md:px-20 px-10 py-10 gap-5 ${containerClassName}`}>
            {
                item.icon && (
                    <item.icon className={'md:w-[40px] w-[30px] md:h-[40px] h-[30px] self-end'}/>
                )
            }
            <h2 className={'md:text-[30px] text-[20px] text-primary-100 md:leading-[35px] leading-[25px]'}>
                {item.title}
            </h2>
            <p className={'md:text-[20px] text-[18px]  font-[200] md:leading-[37px] leading-[30px] text-black-200'}>
                {item.subTitle}
            </p>
        </div>
    )
}