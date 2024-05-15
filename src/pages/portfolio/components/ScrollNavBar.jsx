import NavBarLink from "@/pages/portfolio/components/NavBarLink"

import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";

export default function ScrollNavBar () {
    const shortCuts = [
        {
            key: 'About',
            text: 'Sobre Mi',
            href: '#About'
        },
        {
            key: 'Experience',
            text: 'Experiencia',
            href: '#Experience'
        },
        {
            key: 'Projects',
            text: 'Proyectos',
            href: '#Projects'
        },
    ]

    return (
        <Navbar className="bg-slate-400 font-tempesta" classNames={{ header: 'max-w-full' }} >
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent as="div" className="hidden md:flex md:gap-4 md:w-full md:max-w-full md:justify-around " justify="aroud">
                {
                    shortCuts.map( (item, index) => (
                        <NavbarItem key={`$content-${index}`} className="h-full flex-grow" >
                            <NavBarLink key={`content-${item.key}`} text={item.text} href={item.href}/>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            
            <NavbarMenu className="bg-slate-400 opacity-95 backdrop-blur-xl backdrop-saturate-150">
                {
                    shortCuts.map( (item, index) => (
                        <NavbarItem key={`$menu-${index}`} >
                            <NavBarLink key={`menu-${item.key}`} text={item.text} href={item.href}/>
                        </NavbarItem>
                    ))
                }
            </NavbarMenu>

        </Navbar>
    )
}