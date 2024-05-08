'use client'

import { Link } from "@nextui-org/react"

export default function Home() {
  return ( 
    <div className="p-20 grid place-items-center h-screen w-screen">
      <div className="flex justify-center" >
        <p className="text-3xl font-bold">Home Page being created, for now check out these projects:</p>
        <div className="py-5" > 
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blankTab">blankTab</Link>
        </div>
      </div>
    </div>
  )
}