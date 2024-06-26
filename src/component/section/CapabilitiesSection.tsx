import {imports} from "@/util/imports.ts";
import {useMediaQuery} from "react-responsive";
import {CapabilitiesCard} from "@/component/card/CapabilitiesCard.tsx";

export const CapabilitiesSection=()=>{
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    const items = [
        {
            title: 'Literature Review and Analysis',
            subTitle: "      Rapidly review and analyze vast \n bodies of scholarly literature, \n synthesizing key\n" +
                "                            findings and\n" +
                "                            insights \n across numerous sources. Provide in-depth summaries and critical evaluations\n" +
                "                            to\n" +
                "                            accelerate literature reviews for research projects.",
            icon: imports.icon.preview
        },
        {
            title: 'Data Analysis',
            subTitle: "Process and analyze large datasets to uncover trends, patterns, and actionable insights." +
                " Automatically generate comprehensive reports and interactive dashboards that present complex data in" +
                " an easily digestible format.",
            icon: null

        },
        {
            title: 'Marketing',
            subTitle: "Analyze consumer data to create personalized advertising campaigns that resonate with" +
                " specific audiences.",
            icon: null

        },
        {
            title: 'Human Resource',
            subTitle: "Develop and deliver customized training programs and materials. Use Jeala AI to recommend" +
                " personalized career development paths and training programs for employees, enhancing job satisfaction and retention.",
            icon: imports.icon.humanRelation

        },
    ]
    return (
        <section className={'container-responsive flex flex-col gap-20 py-24'}>
            <h2 className={`text-center ${isTabletOrMobile && 'text-[30px] leading-[45px]'}`}>
                AI Capabilities That Transform {/*<br/>*/} Your Workflow
            </h2>

            {/*index === 0 ? 'row-span-2 col-start-1' :*/}
            {/*index === 1 ? 'row-span-2 col-start-2 row-start-1' :*/}
            {/*index === 2 ? 'row-start-3 col-start-1' :*/}
            {/*index === 3 ? 'row-start-3 col-start-2' : ''*/}

            {/*items-center justify-center*/}


            <div className={'grid md:grid-cols-2 grid-cols-1 grid-flow-row-dense '}>
                {
                    items.map((item, index)=> (
                        <CapabilitiesCard index={index} item={item} />
                    ))
                }
            </div>
        </section>
    )
}