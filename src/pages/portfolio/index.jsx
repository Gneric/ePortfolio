import Link from 'next/link'
import Colors from '@/utils/pallete'
import Header from './header.jsx'

const font = {fontFamily: 'PF Tempesta Five Condensed'}

export default function Porfolio() {
    return (
        <>
            <div className="h-screen" style={{ backgroundColor: Colors.backgroundColor, color: Colors.textColor, width: '100%' }}>
                <div className='h-24 text-center flex justify-center items-center' >

                    <Link className='p-4' href="/blankTab">
                        <p className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500' style={font} >
                            Blank Tab
                        </p>
                    </Link>

                    <h1 className='text-center text-5xl font-bold inline align-middle p-4' style={font}> 
                        Landing Page 
                    </h1>

                    <Link className='p-4' href="/tictactoe">
                        <p className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500' style={font}>
                            Tictactoe
                        </p>
                    </Link>
                    
                </div>                
            </div>
        </>
    )
}