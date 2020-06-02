import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import theme from '@monts/theme'
import GlobalStyle from '@monts/styles/global'
import fetcher from '@monts/lib/unfetch'

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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          draggable={false}
          hideProgressBar
          pauseOnFocusLoss
          pauseOnHover
        />

        <SWRConfig
          value={{
            fetcher,
            onError: (err) => {
              console.error(err)
            }
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default App
