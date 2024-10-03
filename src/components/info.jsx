export default function Info() {

    const sections = [
        {
            name: 'Experiencia',
            url: '#experience',
        },
        {
            name: 'Estudios',
            url: '#studies',
        },
        {
            name: 'Proyectos',
            url: '#projects',
        }
    ]

    return (
        <div className = "lg:w-1/2 lg:pl-10 lg:py-24 lg:pt-20 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:border-r-2 lg:border-r-primary lg:border-opacity-10 lg:mr-10">
            <div>
                <h1 className = "text-text text-4xl md:text-5xl lg:text-5xl font-bold">Oscar Biondi</h1>
                <h3 className = "text-text text-lg mt-3 md:text-xl md:tracking-wide lg:text-xl lg:tracking-wide">
                    Full Stack Developer
                    <p className = "text-text text-sm font-normal mt-3 lg:pr-32">obiondi99@gmail.com</p>
                </h3>
                
                <div className="flex mt-4 space-x-3">
                {
                    sections.map(({ name, url }, index) => {
                        return (
                            <a key={`sections-${index}`} href = {url} className = "rounded-md text-text text-sm font-semibold hover:bg-primary hover:text-text transition-colors bg-accent">
                                <div className = "p-2 min-w-[100px] text-center">
                                    <p>{name}</p>
                                </div>
                            </a>
                        )
                    })
                }
                </div>


                <p className="text-sm mt-10 font-semibold hidden md:block ">Skills:</p>
                <div className="flex mt-4 space-x-3" >
                    <img src="/icons/python-16-svgrepo-com.svg" className="w-6 h-6" alt="Python" />
                    <img src="/icons/javascript-16-svgrepo-com.svg" className="w-6 h-6" alt="javascript" />
                    <img src="/icons/node-16-svgrepo-com.svg" className="w-6 h-6" alt="node" />
                    <img src="/icons/react-16-svgrepo-com.svg" className="w-6 h-6" alt="react" />
                    <img src="/icons/vue-16-svgrepo-com.svg" className="w-6 h-6" alt="vue" />
                    <img src="/icons/graphql-16-svgrepo-com.svg" className="w-6 h-6" alt="graphql" />
                </div>
            </div>
            <div className = "mt-10 flex">
                <a href = "https://github.com/Gneric" target = "_blank" rel = "noopener" className="transform transition-transform duration-300 ease-out hover:scale-125 hover:bg-primary" >
                    <img src="/icons/github-rounded-border-svgrepo-com.svg" className="w-10 h-10" alt="Github" />
                </a>
                <a href = "https://www.linkedin.com/in/obiondi/" target = "_blank" rel = "noopener" className="ml-5 transform transition-transform duration-300 ease-out hover:scale-125 hover:bg-primary" >
                    <img src="/icons/linkedin-rounded-border-svgrepo-com.svg" className="w-10 h-10" alt="Linkedin" />
                </a>
            </div>
        </div>
    )
}