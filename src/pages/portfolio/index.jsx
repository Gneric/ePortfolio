import Link from 'next/link'
import Colors from '@/utils/pallete'
import { Avatar } from "@nextui-org/react";

// Assets
import image from '@/assets/crow-image.png'

const font = {fontFamily: 'PF Tempesta Five Condensed'}

export default function Porfolio() {
    return (
        <div id="App">        
            <div id="page-wrap" >
                <div className="h-screen" style={{ backgroundColor: Colors.backgroundColor, color: Colors.textColor, width: '100%' }}>

                    <div className='h-screen text-center flex flex-col justify-center items-center mb-8'>
                        <h1 className='grow grid place-items-center'> 
                            <p className='text-8xl font-bold' style={font} >
                                Oscar Biondi
                            </p>
                        </h1>

                        <div className='align-middle grow flex flex-row'>
                            <div className='grow w-72 grid place-items-center mx-10'>
                                <p className='text-1xl font-bold' style={font} >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className='grow grid place-items-center'>
                                <Avatar isBordered src='@/assets/crow-image.png' className="w-64 h-64 text-large" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link className='p-4' href="/blankTab">
                            <p className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500' style={font} >
                                Blank Tab
                            </p>
                        </Link>
                        <Link className='p-4' href="/tictactoe">
                            <p className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500' style={font}>
                                Tictactoe
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}