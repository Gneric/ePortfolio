export default function NavBarLink({ text, href }){
  return (
    <div className="flex-1 font-tempesta justify-center h-full">
        <a className="w-full h-full grid place-items-center" href={href}>
          <p className="text-2xl text-black">{text}</p>
        </a>
    </div>
  )
}