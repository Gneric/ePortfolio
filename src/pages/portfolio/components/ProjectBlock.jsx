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
  // return (
  //   <div className={`flex flex-row mb-10 ${directionIndex > -1 ? '' : 'justify-end' } `}>
  //     {
  //       directionIndex == 0 ? (
  //         <>
  //           <div className="w-2/5 bg-slate-600 p-5 z-10">
  //             <p className="text-2xl">{title}</p>
  //             <p className="text-l">{tooltip}</p>
  //             <p className="text-l py-5">{description}</p>
  //           </div>
  //           {/* <div className="w-4/12 bg-slate-700 p-5 grid place-items-center -translate-x-3/4 hover:translate-x-0 transition-all" >
  //             <div className='flex flex-row gap-x-2'>
  //               {tooltip}
  //             </div>
  //           </div> */}
  //         </>
  //       ) : ( 
  //         <>
  //           {/* <div className="w-4/12 bg-slate-700 p-5 grid place-items-center translate-x-3/4 hover:-translate-x-0 transition-all" >
  //             <div className='flex flex-row gap-x-2'>
  //               {tooltip}
  //             </div>
  //           </div> */}
  //           <div className="w-2/5 bg-slate-600 p-5 z-10">
  //             <p className="text-2xl">{title}</p>
  //             <p className="text-l">{tooltip}</p>
  //             <p className="text-l py-5">{description}</p>
  //           </div>
  //           <br />
  //         </>
  //       )
  //     }
  //   </div>
  // )
}