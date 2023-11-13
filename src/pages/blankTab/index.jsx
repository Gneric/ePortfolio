import '@/styles/starterPage/style.css'
import '@/styles/starterPage/fonts.css'

const greetingText = "おかえり！"
const backgroundColor = "#171928"
const textColor = "#c7b7c7"
const favourites = [
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
      "key": ":twt",
      "url": "https://www.twitch.tv/",
      "placeholder": "Twitch"
    },  
    {
      "key": ":igm",
      "url": "http://instagram.com",
      "placeholder": "Instagram"
    },
    {
      "key": ":plx",
      "url": "https://app.plex.tv/desktop/#!/",
      "placeholder": "Plex"
    }
]

function Linkli({ value, prefix, url }) {
    return (
        <li>
            <a href={url} className='black-a' target='_blank'>
                <span>{prefix}</span>
                <span style={{color: textColor}} >{value}</span>
            </a>
        </li>
    )
}

export default function blankPage () {

    const links = favourites.map( item => {
        return <Linkli
            key={item.placeholder}
            value={item.placeholder}
            prefix={item.key}
            url={item.url}
        />
    })

    return (
        <div id="blank-container" style={{ backgroundColor: backgroundColor, width: '100%' }} >
            <div id="blocked">
                <div id="logo" style={{ color: textColor }} >{greetingText}</div>
                <div id="linkblock">
                    <div id="links">
                        <ul>{links}</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}