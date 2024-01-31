import Image from 'next/image'
import ProjectBlock from '@/components/Portfolio/ProjectBlock'


export default function Body() {

  const projects = [
    {
      title: 'Portal de Homologacion',
      description: 'Desarrollo de servicio API para el correcto funcionamiento y eficiencia, ademas de la creacion y preparacion de procesos para su sincronia con el proceso diario de actualizacion.',
      tooltip: (
        <>
          <p>NodeJS</p>
          <p>Express</p>
        </>
      )
    },
    {
      title: 'Portal Sales and Operations Planning',
      description: 'Desarollo e implementacion del servicio API para el manejo y transformacion de archivos, creacion de base de datos GraphQL para el almacenamiento temporal de datos y uso de subscripciones.',
      tooltip: (
        <>
          <p>Python</p>
          <p>Flask</p>
          <p>Pandas</p>
          <p>GraphQL</p>
          <p>Hasura</p>
        </>
      )
    },
    {
      title: 'Autoservicio',
      description: 'Diseño e implementacion de base de datos y servicio API para la verificacion de archivos mediante una configuracion modular para su ingesta directa a la base de datos.',
      tooltip: (
        <>
          <p>MySQL</p>
          <p>Python</p>
          <p>Flask</p>
          <p>Pandas</p>
        </>
      )
    },
    {
      title: 'Servicio API de Ingesta de datos',
      description: 'Creacion e implementacion de servicio API para la ingesta de datos modulable por fechas y tipo de archivos.',
      tooltip: (
        <>
          <p>Python</p>
          <p>Flask</p>
          <p>Pandas</p>
        </>
      )
    },
    {
      title: 'Servicio API de consumo de datos',
      description: 'Creacion e implementacion de servicio API para el consumo de data para el uso de los clientes.',
      tooltip: (
        <>
          <p>NodeJS</p>
          <p>Express</p>
          <p>Prisma</p>
          <p>Vue3</p>
        </>
      )
    },
    {
      title: 'Strategio V3',
      description: 'Diseño e implementacion de base de datos, creacion del servicio API y desarrollo frontend para la actual version del portal de principal uso por los clientes de la empresa.',
      tooltip: (
        <>
          <p>NodeJS</p>
          <p>Express</p>
          <p>Prisma</p>
          <p>Vue3</p>
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