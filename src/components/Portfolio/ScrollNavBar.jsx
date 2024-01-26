import { useEffect, useState } from "react";
import NavBarLink from "./NavBarLink";

export default function ScrollNavBar () {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            
            const scrollY = window.scrollY
            //const threshold = window.screen.availHeight - 200
            const threshold = window.innerHeight - ( 0.11 * window.innerHeight )
            setIsSticky(scrollY >= threshold)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    

    return (
        <div className={ isSticky ? 'fixed top-0 left-0 right-0': '' }>
        {
            !isSticky ?
            <div className="w-full h-32 grid place-items-center bg-slate-400">
                <p className="text-black font-bold text-4xl animate-bounce" >
                    Sigue bajando
                </p>
            </div> :
            <nav className="w-full h-32 flex flex-row justify-evenly bg-slate-400">
                <NavBarLink key={'About'} text='About' href='#About' />
                <NavBarLink key={'Experience'} text='Experience' href='#Experience' />
                <NavBarLink key={'Abilities'} text='Abilities' href='#Abilities' />
                <NavBarLink key={'AFK'} text='AFK' href='#AFK' />
            </nav>
        }
        </div>
    )
}