import Image from 'next/image'
import ProjectBlock from '@/components/Portfolio/ProjectBlock'


export default function Body() {

  const projects = [
    {
      title: 'Portal de Homologacion',
      description: 'Portal web que permite a los clientes homologar los codigos internos con los codigos de sus distribuidores para el seguimientos de estos',
      tooltip: (
        <>
          <p>Python</p>
          <p>NodeJS</p>
          <p>Prisma</p>
        </>
      )
    },
    {
      title: 'Portal Sales and Operations Planning',
      description: 'Portal web que permite a los clientes homologar los codigos internos con los codigos de sus distribuidores para el seguimientos de estos',
      tooltip: (
        <>
          <p>Python</p>
          <p>NodeJS</p>
          <p>Prisma</p>
        </>
      )
    },
    {
      title: 'Autoservicio',
      description: 'Portal web que permite a los clientes homologar los codigos internos con los codigos de sus distribuidores para el seguimientos de estos',
      tooltip: (
        <>
          <p>Python</p>
          <p>NodeJS</p>
          <p>Prisma</p>
        </>
      )
    },
    {
      title: 'Strategio v3',
      description: 'Portal web que permite a los clientes homologar los codigos internos con los codigos de sus distribuidores para el seguimientos de estos',
      tooltip: (
        <>
          <p>Python</p>
          <p>NodeJS</p>
          <p>Prisma</p>
        </>
      )
    }
  ]
  

  return (
    <main className='flex flex-col bg-slate-100 snap-y'>

      <section id="Experience" className="w-full h-[100vh] bg-slate-500 snap-start p-10">
        <p className="text-6xl mb-4">Experience</p>
        <div className="flex flex-col justify-content-between mb-5">
          <div className="flex-1">
            <div className="w-1/2 mb-10">
              <p className="text-4xl mb-2">VidaSoftware</p>
              <p className="text-3xl mb-0">Desarrollador de Software</p>
              <p className="mb-2" >Ene. 2021 - Actual</p>
              <p className="mb-2">
                Dentro de este puesto me dedique a mejorar el proceso ETL de la empresa mediante la creacion y mantenimiento de aplicativos
              </p>
            </div>
            {
              projects.map(project => (
                <ProjectBlock
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tooltip={project.tooltip}
                  directionIndex={ projects.indexOf(project) % 2 != 0 }
                />
              ))
            }
          </div>
        </div>
      </section>

      <section id="Projects" className="w-full h-[100vh] grid place-items-center bg-slate-500 snap-start">
        <p className='text-6xl' >Projects Section</p>
      </section>

      <section id="Abilities" className="w-full h-[100vh] grid place-items-center bg-slate-500 snap-start">
        <p className='text-6xl' >Abilities Section</p>
      </section>

      <section id="AFK" className="w-full h-[100vh] grid place-items-center bg-slate-500 snap-start">
        <p className='text-6xl' >AFK Section</p>
      </section>


    </main>
  )
}