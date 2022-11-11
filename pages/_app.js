import Head from 'next/head'
import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import config from '../config.json'
import { theme } from '../src/theme'
import ColorModeProvider, {
  ColorModeContext
} from '../src/components/ColorMode'
import RegisterPodcast from '../src/components/RegisterPodcast'

function ProviderWrapper({ children }) {
  return (
    <ColorModeProvider initialMode='light'>
      {children}
    </ColorModeProvider>
  )
}

function MyApp({ Component, pageProps }) {
  const { mode } = useContext(ColorModeContext)

  return (
    <ThemeProvider theme={theme[mode]}>
      <Head>
        <link
          rel='stylesheet'
          href={config.icons}
        />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin
        />
        <link
          // eslint-disable-next-line max-len
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <CSSReset />
      <Component {...pageProps} />
      <RegisterPodcast />
    </ThemeProvider>
  )
}

export default function App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
}
