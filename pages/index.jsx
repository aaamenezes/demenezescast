import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import config from '../config.json'
import { CSSReset } from '../src/components/CSSReset'
import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Timeline from '../src/components/Timeline'
import Banner from '../src/components/Banner'
import { theme } from '../src/theme'

export default function HomePage() {
  const [ searchValue, setSearchValue ] = useState('')
  const [ mode, setMode ] = useState('dark') // 'light' | 'dark'

  return (
    <ThemeProvider theme={theme}>
      <CSSReset mode={mode} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}
      >
        <Menu
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          mode={mode}
        />
        <Banner />
        <Header mode={mode} />
        <Timeline playlists={config.playlists} searchValue={searchValue} />
      </div>
    </ThemeProvider>
  )
}
