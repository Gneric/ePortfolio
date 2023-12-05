import Colors from '@/utils/pallete'

import Header from './header'
import CustomSideBar from './customSideBar'

const font = {fontFamily: 'PF Tempesta Five Condensed'}

export default function Porfolio() {
    return (
        <>
            <div className="h-screen flex" style={{ backgroundColor: Colors.backgroundColor, color: Colors.textColor, width: '100%' }}>
                <CustomSideBar />
                <Header />
            </div>
        </>
    )
}