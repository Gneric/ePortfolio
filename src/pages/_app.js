'use client'
// import '@/styles/fonts/fonts.css'

import '@/app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Component id="page-wrap" {...pageProps} />
  )
}

export default MyApp;