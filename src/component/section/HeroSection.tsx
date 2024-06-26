import {DefaultHeader} from "@/component/header/DefaultHeader.tsx";
import {useMediaQuery} from "react-responsive";
import {SliderContainer} from "@/component/container/SliderContainer.tsx";

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

    const settings = {
        dots: false,
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
    }

    return (
        <section className={'h-svh flex flex-col w-full'}>
            <DefaultHeader  />
            <div
                className={'flex flex-col flex-grow '}
            >
                <div
                    className={'container-responsive items-center'}>
                    <h2 className={`text-center capitalize  font-bold ${isTabletOrMobile ? 'text-[25px] leading-[50px]' : ''}`}>
                        <span className={'text-primary-100'}>Discover and explore</span> The <br/> Future of intelligent
                        solutions <br/> with Jeala AI
                    </h2>

                    <p className={`md:text-[34px] text-[25px] md:leading-[45px] leading-[30px] text-center font-urbanist mt-20  font-light`}>
                        Whether you're streamlining business operations, enhancing customer <br/> experiences,
                        or
                        exploring
                        new realms of creativity, Jeala AI is here to <br/> elevate your journey in all works of
                        life.
                    </p>
                </div>

                {/*<div className={'h-[291px] w-full flex  gap-5 overflow-auto '}>*/}
                <SliderContainer containerClassName={''} settings={settings}>
                    {items.map((item, i) => (
                        <div key={i}>
                            <div
                                 className={'md:w-[513px] ] rounded-lg border md:h-[291px] h-[179px] mx-4 flex flex-col px-5 justify-center gap-5'}>
                                <h2 className={'md:text-[32px] text-[25px] font-light leading-[26.88px]'}>{item.title}</h2>
                                <p className={'md:text-[20px] text-[18px]  leading-[25px] font-[200]'}>
                                    {item.subTitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </SliderContainer>


                {/*</div>*/}
            </div>
        </section>
    )
}