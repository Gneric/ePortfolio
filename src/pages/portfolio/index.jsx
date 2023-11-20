import '@/styles/portfolio/style.css'
import Link from 'next/link'
import Colors from '@/utils/pallete'
import Header from './header.jsx'

export default function Porfolio() {
    return (
        <>
            <div className="main-body" style={{ backgroundColor: Colors.backgroundColor, color: Colors.textColor }}>
                <Header />
                <Link href="/blankTab"><p>Blank Tab</p></Link>
                <Link href="/tictactoe"><p>Tictactoe</p></Link> 
            </div>
        </>
    )
}