export default function Info() {
    return (
        <div className = "lg:w-1/2 lg:pl-10 lg:py-24 lg:pt-20 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:border-r-2 lg:border-r-primary lg:border-opacity-10 lg:mr-10">
            <div>
                <h1 className = "text-text text-4xl md:text-5xl lg:text-5xl font-bold">Oscar Biondi</h1>
                <h3 className = "text-slate-200 text-lg mt-3 md:text-xl md:tracking-wide lg:text-xl lg:tracking-wide">Full Stack Developer</h3>
                <p className = "text-slate-400 font-normal mt-3 lg:pr-32">Codeo cosas que funcionan</p>
            </div>
            <div className = "mt-4 flex">
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