import { useState } from "react"

export default function Header() {
    // const data = `width: ${window.innerWidth} \n height: ${window.innerHeight}`

    return (
        <header id="About" className='h-screen h-dvh flex flex-row'>
            <h1 className='grid place-items-center bg-slate-800 p-10 w-3/6'> 
                <p className='text-4xl sm:text-6xl md:text-8xl font-bold text-white' >
                    Oscar Biondi
                </p>
            </h1>

            <div className='grid place-items-center p-10 w-3/6'>
                <p className='font-normal' >
                    Soy un <span className='text-sky-500'>Desarrollador de software</span>, desde manejo de servidores hasta paginas web, de todo un poco o mucho en algunos casos.
                    <br />
                    Este pequeño rincon de internet sirve como presentacion para mi y demostracion de mis proyectos.
                    <br />
                    <br />
                    {/* Datos: <br /> 
                    {data} */}
                </p>
            </div>
        </header>
    )
}