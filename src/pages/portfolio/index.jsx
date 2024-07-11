import Header from '@/components/portfolio/header'
import Body from '@/components/portfolio/body'

import ScrollNavBar from "@/components/portfolio/ScrollNavBar"

export default function Porfolio() {
    return (
        <>
            <div className="flex flex-col font-tempesta bg-slate-800 text-white scroll-smooth">
                <ScrollNavBar />
                <Header />
                <Body />
            </div>
        </>
    )
}