interface DefaultCheckboxProps {
    label?: string,
    defaultChecked?: boolean
}
export const DefaultCheckbox = ({label, defaultChecked=false}: DefaultCheckboxProps)=>{

    return (
        <div className={'flex items-center gap-2'}>
            <input type="checkbox" defaultChecked={defaultChecked} title={'hello'} className="checkbox"/>
            <p className={'font-poppins font-light text-[15px]'}>{label}</p>
        </div>
    )
}