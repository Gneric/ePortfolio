import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <h1> Home Page </h1>
        <Link href="/blankTab" >New Tab Project</Link>
        <Link href="/portfolio" >Portfolio Project</Link>
        <Link href="/tictactoe" >Tictactoe Project</Link>
    </main>
  )
}