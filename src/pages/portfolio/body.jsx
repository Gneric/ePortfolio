import JobBlock from '@/pages/portfolio/components/JobBlock'
import ProjectBlock from '@/pages/portfolio/components/ProjectBlock'
import { useEffect, useState } from 'react'

export default function Body() {
  const [experience, setExperience] = useState([])
  const [projects, setProjects] = useState([])

  useEffect( () => {
    async function fetchData() {
      const exp_res = await fetch('/api/experience')
      const experience = await exp_res.json()
      setExperience(experience.jobs)

      const proj_res = await fetch('/api/projects')
      const projects = await proj_res.json()
      setProjects(projects.projects)
    }

    fetchData()
  }, []);

  return (
    <main className='flex flex-col snap-y font-tempesta'>
      <section id="Experience" className="w-full bg-slate-500 snap-start p-10">
        <p className="text-6xl mb-4">Experiencia</p>
        <div className="flex flex-col justify-content-between mb-5">
          {
            experience.map( job => (
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
        <p className='text-6xl mb-2' >Proyectos</p>
        <p className='text-l mb-12'>Estos son proyectos que hago en mis tiempos libres para explorar nuevas tecnologias y volver realidad ideas</p>
        <div className='flex flex-wrap mb-5 justify-between md:w-5/6 mx-auto'>
          {
            projects.map( project => (
              <ProjectBlock 
                key={project.name}
                title={project.name}
                description={project.description}
                tooltip={project.tecnologies}
                urlDemo={project.urlDemo}
                urlGithub={project.urlGithub}
              />
            ))
          }
        </div>
      </section>
    </main>
  )
}