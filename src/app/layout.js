import '@/app/globals.css'

// import { cn } from "@/lib/utils"

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={`m-0`}>
        {children}
      </body>
    </html>
  )
}
