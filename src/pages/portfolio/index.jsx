import Header from '@/pages/portfolio/header'
import Body from '@/pages/portfolio/body'

import ScrollNavBar from "@/pages/portfolio/components/ScrollNavBar"

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