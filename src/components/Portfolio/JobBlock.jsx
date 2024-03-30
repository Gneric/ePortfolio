
import ProjectBlock from '@/components/Portfolio/ProjectBlock'

export default function JobBlock({ companyName, jobTitle, jobDescription, dateRange, projects }) {

  return (
    <div className="flex-1 mb-10">
      <div className="w-1/2 mb-10">
        <p className="mt-2" >{ dateRange }</p>
        <p className="text-4xl mb-2">{ companyName }</p>
        <p className="text-3xl mb-0">{ jobTitle }</p>
        <p className="mb-2">{ jobDescription }</p>
        <p className="text-3xl">Proyectos: </p>
      </div>
      <div className='flex flex-wrap justify-around'>
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
  )
}