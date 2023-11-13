import '@/styles/starterPage/style.css'
import '@/styles/starterPage/fonts.css'
import './main.js'

export default function blankPage () {
    return (
        <body onload="document.body.style.opacity='1'">
            <div id="container">
                <div id="blocked">
                    <div id="logo">おかえり！</div>
                    <div id="search">
                        <form>
                            <input id="box" type="text" autocomplete="off" placeholder='type  :<key>  and  hit enter to search' />
                        </form>
                        <div id="cheatp">
                            <div id="cheat">
                                <ul>
                                    {/* Aqui iran los links (Generados por el web.json) */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script type="text/javascript" src="browser-newtab/jquery.min.js"></script>
            <script type="text/javascript" src="browser-newtab/main.js"></script>
            <script type="text/javascript" src="browser-newtab/tinycolor.js"></script>
        </body>
    )
}