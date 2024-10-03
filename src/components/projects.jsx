export default function Projects() {

    const projects = [
        {
            name: 'ePortfolio V1',
            description: 'Pagina web que que funcione como showcase para mis estudios, mis trabajos, mis habilidades y parte de mi vida con el toque que me identifica.',
            tecnologies: ["NextJS", "React"],
        },
        {
            name: 'Custom Blank Tab',
            description: 'Una pagina web simple pero customizable que me sirva como default al abrir una nueva pestaña, simplemente como una manera para personalizar mi buscador.',
            tecnologies: ["NextJS", "React"],
            url: '/blankTab',
        }
    ]

    return (
        <div id="projects" className = "mt-16">
            <h1 className = "text-text mb-5 text-base font-bold uppercase tracking-widest lg:text-lg">Proyectos</h1>
            <div>
                {
                    projects.map(({ name, description, url, tecnologies }, index) => {
                        return (
                            <div key={`projects-${index}`} className = "mb-10 lg:flex lg:flex-row-reverse ">
                                <div className = ""> 
                                    <div className = "flex flex-wrap">
                                        {
                                            url ? (
                                                <a href = {url} target = "_blank" rel = "noopener" className = "font-bold tracking-wider text-text hover:text-primary transition-colors">
                                                    {name}
                                                    <img src="/icons/arrow-up-right-svgrepo-com.svg" className="inline h-2 w-2" />
                                                </a>
                                            ) : (
                                                <p className="font-bold tracking-wider text-text" >{name}</p>
                                            )
                                        }
                                        {
                                            tecnologies.map((skill, index) => {
                                                return(
                                                    <div key={`tecnology-${index}`} className = "px-3 py-1 my-1 mx-2 text-text bg-accent text-xs rounded-xl font-semibold lg-font-medium">{skill}</div>
                                                );
                                            })
                                        }
                                    </div>
                                    <p className = "mt-2 text-sm font-normal tracking-wide text-slate-500">{description}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}