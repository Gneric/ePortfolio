import {NextUIProvider} from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
        <Component id="page-wrap" {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp;