import {imports} from "@/util/imports.ts";

export const CapabilitiesSection=()=>{

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
            <h2 className={'text-center'}>
                AI Capabilities That Transform <br/> Your Workflow
            </h2>

            {/*index === 0 ? 'row-span-2 col-start-1' :*/}
            {/*index === 1 ? 'row-span-2 col-start-2 row-start-1' :*/}
            {/*index === 2 ? 'row-start-3 col-start-1' :*/}
            {/*index === 3 ? 'row-start-3 col-start-2' : ''*/}

            {/*items-center justify-center*/}
            <div className={'grid grid-cols-2 grid-flow-row-dense '}>
                {
                    items.map((item, index)=> (
                        <div
                            key={index}
                            // className={`min-w-[560px] bg-white border ${(index == 0 || index == (items.length - 1)) ? 'row-span-2' : 'row-span-2'} rounded-lg flex flex-col  justify-center px-14 py-10 gap-5`}>
                            className={`min-w-[560px] bg-white border ${
                                index === 0 ? 'row-span-2 col-start-1' :
                                    index === 1 ? ' col-start-2 row-start-1' :
                                        index === 2 ? 'row-start-3 col-start-1' :
                                            index === 3 ? 'row-span-2 row-start-3 col-start-2' : ''
                            }  rounded-lg flex flex-col  justify-center px-14 py-10 gap-5`}>

                            {
                                item.icon && (
                                    <item.icon className={'w-[69.12px] h-[69.12px] self-end'}  />
                                )
                            }

                            <h2 className={'text-[36px] leading-[35px]'}>
                                {item.title}
                            </h2>
                            <p className={'text-[26px] font-[200] leading-[37px]  text-black-200'}>
                                {item.subTitle}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}