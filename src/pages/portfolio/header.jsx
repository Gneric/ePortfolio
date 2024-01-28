export default function Header() {
    return (
        <header id="About" className='h-screen h-dvh flex flex-row'>
            <h1 className='grid place-items-center bg-slate-800 w-3/6'> 
                <p className='text-8xl font-bold text-white p-10' >
                    Oscar Biondi
                </p>
            </h1>

            <div className='grid place-items-center p-10 w-3/6'>
                <p className='font-bold' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </header>
    )
}