import '@/app/globals.css'

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className='m-0' >{children}</body>
    </html>
  )
}
