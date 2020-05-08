import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from '@monts/theme'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>monts</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#347AF0" />
        <meta name="description" content="an implementation of a wallet for cryptocurrencies" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="monts" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="monts" />
        <meta name="theme-color" content="#347AF0" />
        <meta name="msapplication-navbutton-color" content="#347AF0" />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
        />

        <link rel="icon" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
