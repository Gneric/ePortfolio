export default function Header() {
    return (
        <header id="About" className='h-screen flex flex-col md:flex-row font-tempesta'>

            <h1 className='grid place-items-center p-10 h-1/4 md:h-screen w-full md:w-3/6 '> 
                <p className='text-4xl sm:text-6xl md:text-8xl  font-bold text-white'>
                    Oscar Biondi
                </p>
            </h1>

            <div className='grid place-items-center bg-slate-900 p-10 h-3/4 md:h-screen w-full md:w-3/6 '>
                <p className='font-normal' >
                    Soy un <span className='text-sky-500'>Desarrollador de software</span>, desde manejo de servidores hasta paginas web, de todo un poco o mucho en algunos casos.
                    <br />
                    Este pequeño rincon de internet sirve como presentacion para mi y demostracion de mis proyectos.
                    <br />
                    <br />
                </p>
            </div>

        </header>
    )
}