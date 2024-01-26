import Colors from '@/utils/pallete'

import Header from './header'
import Body from './body'

export default function Porfolio() {
    return (
        <>
            <div className="flex flex-col" style={{ backgroundColor: Colors.backgroundColor, color: Colors.textColor }}>
                <Header />
                <Body />
            </div>
        </>
    )
}