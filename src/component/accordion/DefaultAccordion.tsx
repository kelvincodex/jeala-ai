import RoundedPlus from '@/assets/icon/rounded-plus.svg'

interface DefaultAccordionProps  {
    title: string
}
export const DefaultAccordion = ({title}: DefaultAccordionProps)=>{

    return (
        <div>
            <div className={'flex items-center gap-5 mb-5'}>
                <RoundedPlus />
                <p>{title}</p>
            </div>
            <div>

            </div>
        </div>
    )
}