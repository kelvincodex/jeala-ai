import {Link} from "react-router-dom";
import {FooterData} from "@/util/data/FooterData.ts";

export const DefaultFooter = () => {

    return(
        <footer className={'py-16 bg-black-200'}>
            <div className={'container-responsive flex flex-col items-center '}>
                <div className={'grid md:grid-cols-4 grid-cols-2 md:gap-40 gap-10'}>
                    {
                        FooterData.map((value, index) => (
                            <ul key={index} className={'font-[200] font-poppins text-white'}>
                                <li className={'text-[20px] font-poppins-medium font-bold leading-[30px] '}>{value.title}</li>
                                {
                                    value.subitems.map((subitems, index) => (
                                        <li key={index} className={'font-light text-[16px] leading-[25px] my-3'}><Link
                                            to={subitems.route ?? '/'}>{subitems.label}</Link></li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}