import { useState } from "react";
import NavBarLink from "./NavBarLink";

import { dictionary } from '@/data/portfolio/dictionary'

export default function ScrollNavBar () {
    const dict = dictionary.Sections
    const [isSticky, setIsSticky] = useState(true);

    // useEffect(() => {
    //     const navigation = document.getElementById('nav')
    //     const navigationHeight = navigation.offsetHeight - 1
    //     console.log('Nav height: ', navigationHeight)

    //     document.documentElement.style.setProperty(
    //         '--scroll-padding', navigationHeight + "px"
    //     )

    //     console.log('ScrollPadding: ', document.documentElement.style.getPropertyValue('--scroll-padding'))

    //     const handleScroll = () => {  
    //         const scrollY = window.scrollY
    //         const threshold = window.innerHeight - ( 0.9 * window.innerHeight )
    //         //const threshold = window.screen.availHeight - 200
    //         if(scrollY >= threshold){
    //             console.log('Setting up isSticky True');
    //             setIsSticky(true)
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [])

    return (
        <nav id='nav' key='stickyNavBar' className="top-0 sticky z-20">
        {
            !isSticky ? (
                <div className="w-full h-32 grid place-items-center bg-slate-400">
                    <p className="text-black font-bold text-4xl animate-bounce" >
                        Keep Scrolling
                    </p>
                </div> 

                ) : (
                <div className="w-full h-32 flex flex-row justify-evenly bg-slate-400">
                    <NavBarLink key={'About'} text={dict.About.ESP} href='#About' />
                    <NavBarLink key={'Experience'} text={dict.Experience.ESP} href='#Experience' />
                    <NavBarLink key={'Projects'} text={dict.Projects.ESP} href='#Projects' />
                    <NavBarLink key={'Abilities'} text={dict.Abilities.ESP} href='#Abilities' />
                    <NavBarLink key={'AFK'} text={dict.AFK.ESP} href='#AFK' />
                </div>
            )
        }
        </nav>
    )
}