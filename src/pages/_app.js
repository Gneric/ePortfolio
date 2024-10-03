'use client'

import Head from 'next/head';
// import '@/styles/fonts/fonts.css'
import '@/app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Oscar Biondi</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Component id="page-wrap" {...pageProps} />
    </>
  )
}

export default MyApp;