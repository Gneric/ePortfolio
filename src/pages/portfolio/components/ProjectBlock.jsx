import { Link } from "@nextui-org/react";

export default function ProjectBlock({ title, description, tooltip, urlDemo, urlGithub }) {
  
  return (
    <div className={`md:w-5/6 lg:w-2/5 xs:mx-0 md:mx-10 mb-10`}>
      <div className="bg-slate-600 sm:h-fit md:h-fit lg:h-72 p-5 z-10">
        <p className="text-2xl">{title}</p>
        <p className="text-l">{tooltip}</p>
        <p className="text-l py-5">{description}</p>
        <div className="text-l">
          { urlDemo ? ( <Link href={urlDemo} showAnchorIcon color="primary"> Demo </Link> ) : <></> }
          { urlGithub ? ( <Link href={urlGithub} showAnchorIcon color="foreground"> Github </Link> ) : <></> }
        </div>
      </div>
    </div>
  )
}