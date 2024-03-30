import JobBlock from '@/components/Portfolio/JobBlock'
import ProjectBlock from '@/components/Portfolio/ProjectBlock'

import { jobs } from '@/data/portfolio/workExperience'
import { projects } from '@/data/portfolio/personalProjects'
import { dictionary } from '@/data/portfolio/dictionary'

export default function Body() {
  const dict = dictionary.Sections

  return (
    <main className='flex flex-col snap-y'>
      <section id="Experience" className="w-full bg-slate-500 snap-start p-10">
        <p className="text-6xl mb-4">{dict.Experience.ESP}</p>
        <div className="flex flex-col justify-content-between mb-5">
          {
            jobs.map( job => (
              <JobBlock 
                key={job.companyName}
                companyName={job.companyName}
                jobTitle={job.jobTitle}
                jobDescription={job.jobDescription}
                dateRange={job.dateRange}
                projects={job.projects}
              />
            ))
          }
        </div>
      </section>

      <section id="Projects" className="w-full bg-slate-500 snap-start p-10">
        <p className='text-6xl mb-4' >{dict.Projects.ESP}</p>
        <p className='text-l mb-12'>Estos son proyectos que hago en mis tiempos libres para explorar nuevas tecnologias y volver realidad ideas</p>
        <div className='flex flex-wrap justify-around'>
          {
            projects.map( project => (
              <ProjectBlock 
                key={project.name}
                title={project.name}
                description={project.description}
                tooltip={project.tecnologies}
              />
            ))
          }
        </div>
      </section>

      <section id="Abilities" className="w-full h-[100vh] grid place-items-center bg-slate-500 snap-start">
        <p className='text-6xl mb-4' >{dict.Abilities.ESP} - En proceso</p>
      </section>

      <section id="AFK" className="w-full h-[100vh] grid place-items-center bg-slate-500 snap-start">
        <p className='text-6xl mb-4' >{dict.AFK.ESP} - En proceso (Creo que todos no?)</p>
      </section>


    </main>
  )
}