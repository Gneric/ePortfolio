import '@/styles/fonts/fonts.css'
import '@/styles/blankTab/style.css'
import Colors from '@/data/blankTab/colors'
import links from '@/data/blanktab/links'
import LinkLi from '@/components/blankTab/linkLi'

export default function blankPage () {

    const generatedlinks = links.map( item => {
        return <LinkLi
            key={item.placeholder}
            value={item.placeholder}
            prefix={item.key}
            url={item.url}
            textColor={Colors.textColor.dark}
        />
    })

    return (
        <div id="blank-container" className='h-screen'  style={{ backgroundColor: Colors.backgroundColor.dark, width: '100%' }} >
            <div id="blocked">
                <div id="logo" style={{ color: Colors.textColor.dark }} >おかえり！</div>
                <div id="linkblock">
                    <div id="links">
                        <ul>{generatedlinks}</ul>
                    </div>
                </div>
            </div>-
        </div>
    )
}