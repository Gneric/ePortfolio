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
            "description": "Desarrollo de microservicios, servicios y portales web y automatizaciones para el macroproceso ETL de la empresa.",
            "start": "Ene. 2021",
            "end": "Actual",
            "skills": ["React", "Vue", "Python", "JavaScript", "C#"],
            "responsabilities": [
                "Implementar los módulos de autoservicio",
                "Implementar programas de ingesta y/o envio de datos.",
                "Implementar microprocesos.",
                "Implementar un sistema modular web para la ingesta y homologacion de productos.",
                "Implementacion de un sistema de registro para el analisis y seguimiento de los programas internos."
            ]
        },
        {
            "company": "Vidasofware S.A.C",
            "jobTitle": "Desarrollador Full Stack",
            "description": "Administrador y mantenimiento de bases de datos ademas de gestion de proceso ETL.",
            "start": "Nov. 2018",
            "end": "Dic. 2020",
            "skills": ["SQLServer", "MySQL"],
            "responsabilities": [
                "Analizar los KPI's del cliente y elaborar reportes en base a ellos.",
                "Administración y mantenimiento de diversas bases de datos (MySQL, SQLServer).",
                "Implementacion de programas (Python) para la mejora de proceso ETL.",
                "Implementacion de sistema de conversion y normalizacion de productos."
            ]
        }
    ]

    return (
        <div className = "mt-10 text-text font-normal lg:mt-20">
            <h1 className = "text-text mb-5 text-base font-bold uppercase tracking-widest lg:text-lg">Experiencia</h1>
            <div>
                {
                    jobs.map((item, index) => {
                        return (
                            <div key={`jobs-${index}`} className = "lg:flex lg:items-start mb-5">
                                <div className = "lg:w-full">
                                    <p className = "text-sm font-bold tracking-wider lg:w-1/4">{ item["start"] ? item["start"] + " - " + item["end"] : "" }</p>
                                    <p className = "text-lg tracking-wider text-text font-bold" >{item["company"]}</p>
                                    <p className = "font-medium text-normal">{item["post"]}</p>
                                    <p className = "mt-2 text-normal tracking-wide">{item["description"]}</p>
                                    <div className = "flex flex-wrap mt-3">
                                    {
                                        item["skills"].map((skill, index) => {
                                            return(
                                                <div key={`skills-${index}`} className = "px-3 py-1 my-1 mx-2 text-text bg-accent font-semibold text-xs rounded-xl lg-font-medium">{skill}</div>
                                            );
                                        })
                                    }
                                    </div>
                                    <div className="lg:mx-5 mb-4" >
                                        <ul>
                                            {
                                                item["responsabilities"].map((responsability, index) => {
                                                    return(
                                                        <li key={`responsabilities-${index}`} className = "mt-2 text-sm tracking-wide">{`• ${responsability}`}</li>
                                                    );
                                                })
                                            }
                                        </ul>
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