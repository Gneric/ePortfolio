// import { useState } from "react";
import NavBarLink from "./NavBarLink";
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";

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
                        <NavbarItem key={`${item}-content-${index}`} >
                            <NavBarLink key={item.key} text={item.text} href={item.href}/>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            <NavbarMenu>
                {
                    shortCuts.map( (item, index) => (
                        <NavbarItem key={`${item}-content-${index}`} >
                            <NavBarLink key={item.key} text={item.text} href={item.href}/>
                        </NavbarItem>
                    ))
                }
            </NavbarMenu>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">

                    <DropdownTrigger>
                        <Avatar isBordered as="button" color="secondary" name="" size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
                    </DropdownTrigger>

                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="settings">My Settings</DropdownItem>
                    </DropdownMenu>

                </Dropdown>
            </NavbarContent>

        </Navbar>
    )
}