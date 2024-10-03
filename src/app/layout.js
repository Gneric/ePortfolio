import Head from 'next/head';

import '@/app/globals.css'

// import { cn } from "@/lib/utils"

// export const metadata = {
//   title: 'Oscar Biondi',
//   description: 'La pagina oficial',
//   icons: {
//     icon: '/icon.svg',
//   },
// }

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={`m-0`}>
        {children}
      </body>
    </html>
  )
}
