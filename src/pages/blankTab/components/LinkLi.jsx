import { Link } from "@nextui-org/react";

export default function Linkli({ prefix, value, url, editMode }) {
  return (
      <li className='inline-block font-tempesta mx-3 my-1 p-0 text-left transition-all'>
          {
            !editMode ? (
              <span className='w-9 p-3 text-black rounded-s-md bg-gray-500'>{prefix}</span> 
            ) : (
              <Link className='cursor-pointer decoration-transparent' onPress={() => { console.log('removing') }} >
                <span className='w-12 p-3 text-center text-black rounded-s-md bg-red-400'>x</span>
              </Link>
            )
          }
          <Link href={url} className='cursor-pointer decoration-transparent'>
            <span className='p-3 inline-block text-white rounded-e-md bg-black hover:bg-slate-400 hover:bg-opacity-10'>
                {value}
            </span>
          </Link>
      </li>
  )
}
