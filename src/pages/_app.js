'use client'
import {NextUIProvider} from '@nextui-org/react'
import '@/styles/global/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
        <Component id="page-wrap" {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp;