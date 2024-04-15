import NavBarLink from "./NavBarLink"
import SettingsMenu from './SettingsMenu'

import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";

import { dictionary } from '@/data/portfolio/dictionary'

export default function ScrollNavBar () {
    const dict = dictionary.Sections

    const shortCuts = [
        {
            key: 'About',
            text: dict.About.ESP,
            href: '#About'
        },
        {
            key: 'Experience',
            text: dict.Experience.ESP,
            href: '#Experience'
        },
        {
            key: 'Projects',
            text: dict.Projects.ESP,
            href: '#Projects'
        },
        {
            key: 'Abilities',
            text: dict.Abilities.ESP,
            href: '#Abilities'
        },
        {
            key: 'AFK',
            text: dict.AFK.ESP,
            href: '#AFK'
        }
    ]

    return (
        <Navbar>
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="center">
                {
                    shortCuts.map( (item, index) => (
                        <NavbarItem key={`$content-${index}`} >
                            <NavBarLink key={`content-${item.key}`} text={item.text} href={item.href}/>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            
            <NavbarMenu>
                {
                    shortCuts.map( (item, index) => (
                        <NavbarItem key={`$menu-${index}`} >
                            <NavBarLink key={`menu-${item.key}`} text={item.text} href={item.href}/>
                        </NavbarItem>
                    ))
                }
            </NavbarMenu>

            <NavbarContent as="div" justify="end">
                <SettingsMenu></SettingsMenu>
            </NavbarContent>         

        </Navbar>
    )
}