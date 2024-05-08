import { Link } from "@nextui-org/react";

export default function Linkli({ value, prefix, url, textColor }) {
  return (
      <li className='inline-block font-tempesta mx-3 my-1 p-0 text-left transition-all' >
          <Link href={url} className='cursor-pointer decoration-transparent'>
            <span className='px-3 py-3 inline-block text-black rounded-s-md bg-gray-500' >{prefix}</span>
            <span className='px-3 py-3 inline-block text-white rounded-e-md bg-black hover:bg-slate-400 hover:bg-opacity-10'>
                {value}
            </span>
          </Link>
      </li>
  )
}
