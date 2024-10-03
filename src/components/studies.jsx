export default function Studies() {

    const studies = [
        {
            name: 'Cibertec',
            start: '2017',
            end: '2019',
            title: 'Titulado Profesional Técnico en Computación e Informática',
            projects: [
                "Desarrollo de aplicativo móvil para Android e iOS (Javascript, Flutter).",
                "Administración de base de datos (MSSQL)."
            ]
        },
        {
            name: 'Estudios Autonomos',
            url: 'https://www.linkedin.com/in/obiondi/details/certifications/',
            title: 'Estudios autonomos para mejorar mis habilidades',

        }
    ]

    return (
        <div id="studies" className="mt-14">
            <h1 className = "text-text mb-5 text-base font-bold uppercase tracking-widest lg:text-lg">Estudios</h1>
            <div>
                {
                    studies.map(({ name, url, start, end, title, projects }, index) => {
                        return (
                            <div key={`studies-${index}`} className="mb-10 lg:flex lg:flex-row-reverse">
                                <div className="flex-1">
                                    {
                                        url ? (
                                            <a href={url} target="_blank" rel="noopener" className="tracking-wider text-text hover:text-primary transition-colors">
                                                <p className="text-lg text-black">{name}<img src="/icons/arrow-up-right-svgrepo-com.svg" className="inline h-2 w-2" /></p>
                                                <p className="text-base font-normal">{title}</p>
                                            </a>
                                        ) : (
                                            <>
                                                <p className="text-lg text-black">{name}</p>
                                                <p className="text-base font-normal">{title}</p>
                                                <p className="text-base font-semibold">{ start ? `${start} - ${end}` : '' }</p>
                                            </>
                                        )
                                    }
                                    <div className="lg:mx-5 mb-4" >
                                        <ul>
                                            {
                                                projects ? projects.map((project, index) => {
                                                    return(
                                                        <li key={`project-${index}`} className = "mt-2 text-sm tracking-wide">{`• ${project}`}</li>
                                                    );
                                                }) : null
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )   
}