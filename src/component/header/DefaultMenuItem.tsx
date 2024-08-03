import {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {StringUtil} from "@/util/StringUtil.ts";

interface DefaultMenuItemProps {
    handlePress?: () => void;
}
export const DefaultMenuItem = ({handlePress=()=>{}, }: DefaultMenuItemProps)=>{
    const themeState = useSelector((state: RootState) => state.theme);

    const detailsRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
                detailsRef.current.removeAttribute('open');
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    function handleNavigation(){
        handlePress()
        if (detailsRef.current) {
            if (detailsRef.current.hasAttribute('open')) {
                detailsRef.current.removeAttribute('open');
            } else {
                detailsRef.current.setAttribute('open', 'true');
            }
        }
    }


    return (
        <details ref={detailsRef}>
            <summary>Solution</summary>
            <ul className={`bg-base-100  rounded-t-none  p-1 ${themeState.theme == 'light' ? 'text-black bg-white' : 'text-white bg-dark-400'}`}>
                <li className={`${StringUtil.useUrlSuffix(['#capabilities']) && 'text-primary-100'}`}><a
                    href={'/#capabilities'}
                    onClick={handleNavigation}>Capabilities</a>
                </li>
                <li className={`${StringUtil.useUrlSuffix(['#useCase']) && 'text-primary-100'}`}><a
                    href={'/#useCase'}
                    onClick={handleNavigation}>Use Case</a></li>
            </ul>
        </details>
    )
}