
export default function ProjectBlock({ title, description, tooltip, directionIndex }) {
  return (
    <div className={`flex flex-row mb-10 ${directionIndex == 0 ? '' : 'justify-end' } `}>
      {
        directionIndex == 0 ? (
          <>
            <div className="w-2/5 bg-slate-600 p-5 z-10">
              <p className="text-2xl">{title}</p>
              <p className="text-l">{description}</p>
            </div>
            <div className="w-4/12 bg-slate-700 p-5 grid place-items-center -translate-x-3/4 hover:translate-x-0 transition-all" >
              <div className='flex flex-row gap-x-2'>
                {tooltip}
              </div>
            </div>
          </>
        ) : ( 
          <>
            <div className="w-4/12 bg-slate-700 p-5 grid place-items-center translate-x-3/4 hover:-translate-x-0 transition-all" >
              <div className='flex flex-row gap-x-2'>
                {tooltip}
              </div>
            </div>
            <div className="w-2/5 bg-slate-600 p-5 z-10">
              <p className="text-2xl">{title}</p>
              <p className="text-l">{description}</p>
            </div>
            <br />
          </>
        )
      }
    </div>
  )
}