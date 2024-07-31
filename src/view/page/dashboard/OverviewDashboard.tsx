
export const OverviewDashboard = ()=>{

    const items = [
        {
            label: "Define Your Objective Clearly:",
            title: "Offer necessary background information to give the prompt relevance and clarity. Include any specific" +
                " guidelines, constraints, or examples that can help guide the response and ensure the task is understood correctly."
        }
    ]
    return (
        <div className={'h-full flex flex-col items-center'}>
            <div className={' flex flex-col items-center p-4 w-[60%]'}>
                <h2>Welcome to <span className={'text-primary-100'}>Jeala AI</span></h2>
                <p className={'text-center'}>Be among the first to experience the future of AI. <br/>
                    Write a Professional Prompt using the following guidelines:</p>


                <div className={'mt-10'}>
                    {
                        items.map((item, index) => {
                            return (
                                <div key={index} className="collapse collapse-plus bg-white">
                                    <input type="radio" name="my-accordion-3"/>
                                    <div className="collapse-title font-normal">{item.label}</div>
                                    <div className="collapse-content !text-[10px]">
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}