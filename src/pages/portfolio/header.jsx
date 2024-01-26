import { Avatar } from "@nextui-org/react";

export default function Header() {
    const headerHeight = 'calc(100vh - 10vh)'

    return (
        <section id="About" style={{ height: headerHeight }} className='h-dvh flex flex-row'>
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
        </section>
    )
}