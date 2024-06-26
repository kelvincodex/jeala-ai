import {DefaultHeader} from "@/component/header/DefaultHeader.tsx";
import {useMediaQuery} from "react-responsive";

export const HeroSection = () => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    const items = [
        {
            title: "Configure",
            subTitle: "Customize AI models to fit your specific needs, ensuring tailored solutions and optimal" +
                " performance for your unique business challenges.\n",
        },
        {
            title: "Configure",
            subTitle: "Customize AI models to fit your specific needs, ensuring tailored solutions and optimal" +
                " performance for your unique business challenges.\n",
        },
        {
            title: "Configure",
            subTitle: "Customize AI models to fit your specific needs, ensuring tailored solutions and optimal" +
                " performance for your unique business challenges.\n",
        },
        {
            title: "Configure",
            subTitle: "Customize AI models to fit your specific needs, ensuring tailored solutions and optimal" +
                " performance for your unique business challenges.\n",
        },
        {
            title: "Configure",
            subTitle: "Customize AI models to fit your specific needs, ensuring tailored solutions and optimal" +
                " performance for your unique business challenges.\n",
        },
        {
            title: "Configure",
            subTitle: "Customize AI models to fit your specific needs, ensuring tailored solutions and optimal" +
                " performance for your unique business challenges.\n",
        },
        {
            title: "Configure",
            subTitle: "Customize AI models to fit your specific needs, ensuring tailored solutions and optimal" +
                " performance for your unique business challenges.\n",
        },
    ]

    return (
        <section className={'h-svh flex flex-col w-full'}>
            <DefaultHeader  />
            <div
                className={'flex flex-col flex-grow '}
            >
                <div
                    className={'container-responsive items-center'}>
                    <h2 className={`text-center ${isTabletOrMobile ? 'text-[50px] leading-[60px]': ''}`}>
                        <span className={'text-primary-100'}>Discover and explore</span> the future <br/> of intelligent
                        solutions with <br/> Jeala AI
                    </h2>

                    <p className={`text-[34px] leading-[45px] ${isTabletOrMobile ? 'text-[25px] leading-[35px] mt-14': 'mt-20'} text-center font-urbanist  font-light`}>
                        Whether you're streamlining business operations, enhancing customer <br/> experiences, or
                        exploring
                        new realms of creativity, Jeala AI is here to <br/> elevate your journey in all works of life.
                    </p>
                </div>

                <div className={'h-[291px] w-full flex  gap-5 overflow-auto '}>
                    {items.map((item, i) => (
                        <div key={i} className={'min-w-[513px] rounded-lg border h-full flex flex-col px-5 justify-center gap-5'}>
                            <h2 className={'text-[32px] font-light leading-[26.88px]'}>{item.title}</h2>
                            <p className={'text-[20px] leading-[25px] font-[200]'}>
                                {item.subTitle}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}