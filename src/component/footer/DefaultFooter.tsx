import {Link} from "react-router-dom";

export const DefaultFooter = () => {

    const items = [
        {
            title: 'Jeala Ai',
            subitems:[
                {
                    icon: null,
                    label: 'Overview',
                    route: null
                },
                {
                    icon: null,
                    label: 'For Everyone',
                    route: null
                },
                {
                    icon: null,
                    label: 'For Teams',
                    route: null
                },
                {
                    icon: null,
                    label: 'For Enterprises',
                    route: null
                },
                {
                    icon: null,
                    label: 'Jeala Login',
                    route: null
                },
            ]
        },
        {
            title: 'Safety Overview',
            subitems:[
                {
                    icon: null,
                    label: 'Safety Overview',
                    route: null
                },
                {
                    icon: null,
                    label: 'Safety Standards',
                    route: null
                },
                {
                    icon: null,
                    label: 'Security',
                    route: null
                },
            ]
        },
        {
            title: 'Company',
            subitems:[
                {
                    icon: null,
                    label: 'About us',
                    route: null
                },
                {
                    icon: null,
                    label: 'News',
                    route: null
                },
                {
                    icon: null,
                    label: 'Our Charter',
                    route: null
                },
                {
                    icon: null,
                    label: 'Careers',
                    route: null
                },
            ]
        },
        {
            title: 'Terms & polices',
            subitems:[
                {
                    icon: null,
                    label: 'Terms of use',
                    route: null
                },
                {
                    icon: null,
                    label: 'Privacy Policy',
                    route: null
                },
                {
                    icon: null,
                    label: 'Brand guidelines',
                    route: null
                },
                {
                    icon: null,
                    label: 'other policies',
                    route: null
                },
            ]
        },
    ]
    return(
        <footer className={'container-responsive py-20 '}>
            <div className={'grid grid-cols-4'}>
                {
                    items.map((value, index)=> (
                        <ul key={index} className={' font-[200] font-poppins text-[28px] '}>
                            <li className={'text-[21px] font-poppins-medium font-semibold leading-[50px]'}>{value.title}</li>
                            {
                                value.subitems.map((subitems, index)=> (
                                    <li key={index} className={'font-light text-[18px] leading-[40px]'}><Link to={subitems.route ?? '/'}>{subitems.label}</Link></li>
                                ))
                            }

                        </ul>
                    ))
                }
            </div>
        </footer>
    )
}