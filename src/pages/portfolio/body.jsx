import JobBlock from '@/pages/portfolio/components/JobBlock'
import ProjectBlock from '@/pages/portfolio/components/ProjectBlock'

import jobs from '@/data/portfolio/workExperience.js'
import projects from '@/data/portfolio/personalProjects.js'
import dictionary from '@/data/portfolio/dictionary.js'

export default function Body() {
  const dict = dictionary.Sections

  return (
    <main className='flex flex-col snap-y font-tempesta'>
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
        <p className='text-6xl mb-2' >{dict.Projects.ESP}</p>
        <p className='text-l mb-12'>Estos son proyectos que hago en mis tiempos libres para explorar nuevas tecnologias y volver realidad ideas</p>
        <div className='flex flex-wrap mb-5 justify-start'>
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