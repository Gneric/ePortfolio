
import ProjectBlock from '@/components/portfolio/ProjectBlock'

export default function JobBlock({ companyName, jobTitle, jobDescription, dateRange, projects }) {

  return (
    <div className="flex-1 mb-10 font-tempesta">
      <div className="md:w-full lg:w-1/2 mb-10">
        <p className="mt-2" >{ dateRange }</p>
        <p className="text-4xl mb-2">{ companyName }</p>
        <p className="text-3xl mb-0">{ jobTitle }</p>
        <p className="mb-2">{ jobDescription }</p>
        <p className="text-3xl">Proyectos: </p>
      </div>
      <div className={`flex flex-wrap justify-between md:w-5/6 mx-auto`}>
        {
          Array.isArray(projects) ? projects.map((project, index) => (
            <ProjectBlock
              key={project.title}
              title={project.title}
              description={project.description}
              tooltip={project.tooltip}
              urlDemo={project.urlDemo}
              urlGithub={project.urlGithub}
            />
          )) : null
        }
      </div>
    </div>
  )
}