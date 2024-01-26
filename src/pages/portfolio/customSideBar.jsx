import { Avatar } from "@nextui-org/react";

const shortcuts = [
    {
        title: 'Sobre Mi',
        isNewTab: false,
        href: '#about',
        active: true
    },
    {
        title: 'Experiencia',
        isNewTab: false,
        href: '#experience',
        active: false
    },
    {
        title: 'Educacion',
        isNewTab: false,
        href: '#Educacion'
    },
    {
        title: 'Habilidades',
        isNewTab: false,
        href: '#skills'
    },
    {
        title: 'Intereses',
        isNewTab: false,
        href: '#interests'
    },
    {
        title: 'Certificaciones',
        isNewTab: false,
        href: '#awards'
    }
]

export default function CustomSideBar() {
    return (
        <>
            <div className='h-screen w-64 flex flex-col text-center text-white' style={{ backgroundColor: '#bd5d38' }} >
                <div className="my-auto" >
                    <div className="inline-flex flex-col p-2" >
                        <Avatar isBordered  src='@/assets/profile.png' className="w-16 h-16" />
                    </div>
                    <div>
                        <ul>
                            {
                                shortcuts.map( (item, key) => {
                                    return (
                                        <li className="py-2" key={key}>
                                            <a className="uppercase font-bold tracking-wide p-2 text-white hover:opacity-1" style={{opacity: item.active ? 1 : 0.3}} href={item.href}>{ item.title }</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}