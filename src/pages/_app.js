'use client'
import { NextUIProvider } from '@nextui-org/react'

import '@/styles/fonts/fonts.css'

import '@/app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component id="page-wrap" {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp;