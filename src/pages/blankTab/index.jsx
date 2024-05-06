import '@/styles/fonts/fonts.css'
import '@/styles/blankTab/style.css'
import Colors from '@/data/blankTab/colors'
// import links from '@/data/blanktab/links.js'
import LinkLi from '@/components/blankTab/linkLi'

import AddButton from '@/components/blankTab/AddButton'

import { useState } from 'react'

export default function blankPage () {
    var initialLinks = [
        {
          "key": ":ytb",
          "url": "https://www.youtube.com/",
          "placeholder": "Youtube",
          "background": "#1877f2"
        },
        {
          "key": ":wsp",
          "url": "https://web.whatsapp.com/",
          "placeholder": "Whatsapp"
        },
        {
          "key": ":gth",
          "url": "http://github.com",
          "placeholder": "Github"
        },
        {
          "key": ":igm",
          "url": "http://instagram.com",
          "placeholder": "Instagram"
        },
        {
          "key": ":nya",
          "url": "https://nyafilmer.gg/",
          "placeholder": "Nyafilmer"
        }
      ]
    const [links, setLinks] = useState(initialLinks)

    const addLink = ({ key, url, placeholder }) => {
        setLinks([...links, {
            "key": key,
            "url": url,
            "placeholder": placeholder
        }])
    }


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
                <div id="logo" style={{ color: Colors.textColor.dark }}> いらっしゃいませ </div>
                <div id="linkblock">
                    <div id="links">
                        <ul>{generatedlinks}</ul>
                        <ul>
                            <AddButton key={'addButtonBlankTab'} addLink={addLink} ulkey={':ggl'} url={'https://www.google.com/'} placeholder={'google'} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}