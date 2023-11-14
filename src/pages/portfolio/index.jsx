import '@/styles/portfolio/style.css'
import Link from 'next/link'
import Colors from '@/utils/pallete'

export default function Porfolio() {
    return (
        <>
            <div className="main-body" style={{ backgroundColor: Colors.BackgroundColor, color: Colors.TextColor, width: '100%' }}>
                <h1 className='portofolio-title' > Portfolio Page </h1>
                <nav>
                    <Link href="/blankTab"><p>Blank Tab</p></Link>
                    <Link href="/tictactoe"><p>Tictactoe</p></Link>
                </nav>
            </div>
        </>
    )
}