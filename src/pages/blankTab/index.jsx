import '@/styles/starterPage/style.css'
import Colors from '@/utils/pallete'
import links from '@/data/links'

function Linkli({ value, prefix, url }) {
    return (
        <li>
            <a href={url} className='black-a' target='_blank'>
                <span>{prefix}</span>
                <span style={{color: Colors.textColor }} >{value}</span>
            </a>
        </li>
    )
}

export default function blankPage () {

    const generatedlinks = links.map( item => {
        return <Linkli
            key={item.placeholder}
            value={item.placeholder}
            prefix={item.key}
            url={item.url}
        />
    })

    return (
        <div id="blank-container" style={{ backgroundColor: Colors.backgroundColor, width: '100%' }} >
            <div id="blocked">
                <div id="logo" style={{ color: Colors.textColor }} >おかえり！</div>
                <div id="linkblock">
                    <div id="links">
                        <ul>{generatedlinks}</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}