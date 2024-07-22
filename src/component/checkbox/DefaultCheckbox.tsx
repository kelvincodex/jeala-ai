import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface DefaultCheckboxProps {
    label?: string,
    defaultChecked?: boolean
}
export const DefaultCheckbox = ({label, defaultChecked=false}: DefaultCheckboxProps)=>{
    const themeState = useSelector((state: RootState) => state.theme);

    return (
        <div className={'flex items-center gap-2'}>
            <input type="checkbox" defaultChecked={defaultChecked} title={'hello'} className={`checkbox ${themeState.theme == 'dark' && 'border-white'} `} />
            <p className={`font-poppins font-light text-[15px] ${themeState.theme == 'dark' && 'text-white'}`}>{label}</p>
        </div>
    )
}