import '@/styles/starterPage/style.css'
import '@/styles/starterPage/fonts.css'
// import '@/views/StarterPage/main.js'
// import '@/views/StarterPage/tinycolor.js'

export default function blankPage () {
    const backgroundColor = ""
    const textColor = ""
    const greetingText = "おかえり！"

    return (
        <body>
            <div id="container">
                <div id="blocked">
                    <div id="logo">{greetingText}</div>
                    <div id="search">
                        <div id="linkblock">
                            <div id="links">
                                <ul>
                                    testing again{/* Aqui iran los links (Generados por el web.json) */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}