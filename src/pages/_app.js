'use client'
import { ContextProvider } from '@/pages/linkShortener/context/index'
import { NextUIProvider } from '@nextui-org/react'

import '@/styles/fonts/fonts.css'
import '@/app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <ContextProvider>
        <Component id="page-wrap" {...pageProps} />
      </ContextProvider>
    </NextUIProvider>
  )
}

export default MyApp;