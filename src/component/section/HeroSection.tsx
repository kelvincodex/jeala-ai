import {SliderContainer} from "@/component/container/SliderContainer.tsx";
import {heroConfigData} from "@/util/data/HeroConfigData.ts";
import {HeroCard} from "@/component/card/HeroCard.tsx";

export const HeroSection = () => {


    const settings = {
        dots: false,
        slidesToShow: 3.5,
        slidesToScroll: 1.5,
    }

    return (
        <section className={'w-full'}>
                <div
                    className={'flex flex-col w-full justify-center  min-h-[calc(100vh-100px)] py-20 gap-20'}
                >
                    <div
                        className={''}>
                        <h2 className={`text-center capitalize  font-semibold`}>
                            <span className={'text-primary-100'}>Discover and explore</span> The <br/> Future of intelligent
                            solutions <br/> with Jeala AI
                        </h2>

                        <p className={`text-[28px]  leading-[40px]  text-center font-urbanist mt-10  font-light`}>
                            Whether you're streamlining business operations, enhancing customer <br/> experiences,
                            or
                            exploring
                            new realms of creativity, Jeala AI is here to <br/> elevate your journey in all works of
                            life.
                        </p>

                    </div>
                    <SliderContainer containerClassName={'mt-10'} settings={settings}>
                        {heroConfigData.map((item, i) => (
                            <div key={i}>
                                <HeroCard item={item} />
                            </div>
                        ))}
                    </SliderContainer>
                </div>
        </section>
    )
}