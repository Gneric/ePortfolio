import Colors from '@/utils/pallete'
import Header from './header'
import Body from './body'

import ScrollNavBar from "@/components/Portfolio/ScrollNavBar"

import '@/styles/portfolio/style.css'

export default function Porfolio() {
    // const [darkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // }

    return (
        <>
            <div className="flex flex-col" style={{ backgroundColor: Colors.backgroundColor, color: Colors.textColor }}>
                <ScrollNavBar />
                <Header />
                <Body />
            </div>
        </>
    )
}