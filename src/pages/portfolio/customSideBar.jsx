const shortcuts = [
    {
        title: 'Sobre Mi',
        isNewTab: false,
        href: '#about'
    },
    {
        title: 'Experiencia',
        isNewTab: false,
        href: '#experience'
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
                <div className="inline-flex flex-col p-2" >
                    <span type="button">
                        <img></img>
                    </span>
                    <span>
                        <img></img>
                    </span>
                </div>
                <div>
                    <ul>
                        {
                            shortcuts.map( (item, key) => {
                                return (
                                    <li className="block py-2 " key={key}>
                                        <a className="uppercase font-extrabold tracking-wide p-2"  href={item.href}>{ item.title }</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}