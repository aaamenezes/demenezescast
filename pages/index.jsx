import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import config from '../config.json'
import { CSSReset } from '../src/components/CSSReset'
import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Timeline from '../src/components/Timeline'
import Banner from '../src/components/Banner'
import { theme } from '../src/theme'

export default function HomePage() {
  const [ searchValue, setSearchValue ] = useState('')
  const [ mode, setMode ] = useState('light') // 'light' | 'dark'

  useEffect(() => {
    const storageMode = localStorage.getItem('storageMode')

    if (storageMode) {
      setMode(storageMode)
    } else {
      localStorage.setItem('storageMode', 'light')
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CSSReset mode={mode} />
      <Head>
        <link
          rel='stylesheet'
          href={config.icons}
        />
      </Head>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}
      >
        <Menu
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setMode={setMode}
          mode={mode}
        />
        <Banner />
        <Header />
        <Timeline playlists={config.playlists} searchValue={searchValue} />
      </div>
    </ThemeProvider>
  )
}
