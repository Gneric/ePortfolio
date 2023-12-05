import { Avatar } from "@nextui-org/react";

const font = {fontFamily: 'PF Tempesta Five Condensed'}
export default function ePortfolioHeaderV1() {
    return (
        <>
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
        </>
    )
}