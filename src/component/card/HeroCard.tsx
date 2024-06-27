
interface HeroCardProps {
    item: any
}
export const HeroCard = ({item}: HeroCardProps)=>{

    return (
        <div
            className={'rounded-lg border mx-2 py-20 flex flex-col px-5 justify-center gap-5'}>
            <h2 className={'text-[20px] ] font-semibold leading-[10px]'}>{item.title}</h2>
            <p className={'text-[18px]   leading-[25px] font-[200]'}>
                {item.subTitle}
            </p>
        </div>
    )
}