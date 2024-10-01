export default function Experience() {

    const jobs = [
        // {
        //     "company": "Freelance",
        //     "jobTitle": "",
        //     "description": "Diseño, desarrollo e implementacion de sistemas back end para diversos proyectos",
        //     "skills": ["JavaScript", "SQLite"]
        // },
        {
            "company": "Vidasofware S.A.C",
            "jobTitle": "Desarrollador Full Stack",
            "description": "Desarrollo de diversos programas incluyendo pero no limitandose a portales web, automatizaciones de procesos ETL y servicios API para el consumo de datos.",
            "start": "Ene. 2021",
            "end": "Actual",
            "skills": ["React", "Vue", "Python", "JavaScript", "SQL"]
        }
    ]

    return (
        <div className = "mt-14 text-text font-normal lg:mt-20">
            <h1 className = "text-text mb-5 text-sm font-bold uppercase tracking-widest lg:hidden">Experience</h1>
            <div>
                {
                    jobs.map((item, index) => {
                        return (
                            <div className = "lg:flex lg:items-start mb-5">
                                <div className = "lg:w-full">
                                    <p className = "text-sm font-bold tracking-wider lg:w-1/4">{ item["start"] ? item["start"] + " - " + item["end"] : "" }</p>
                                    <p className = "text-lg tracking-wider text-text font-bold" >{item["company"]}</p>
                                    <p className = "font-medium text-normal">{item["post"]}</p>
                                    <p className = "mt-2 text-sm tracking-wide">{item["description"]}</p>
                                    <div className = "flex flex-wrap mt-3">
                                    {
                                        item["skills"].map((skill, index) => {
                                            return(
                                                <div className = "px-3 py-1 my-1 mx-2 text-text bg-accent text-xs rounded-xl md:font-medium lg-font-medium">{skill}</div>
                                            );
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}