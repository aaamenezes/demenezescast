import React, { useState } from 'react'
import config from '../config.json'
import { CSSReset } from '../src/components/CSSReset'
import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Timeline from '../src/components/Timeline'
import Banner from '../src/components/Banner'

export default function HomePage() {
  const [ searchValue, setSearchValue ] = useState('')
  // const [ modeType, setModeType ] = useState('light') // 'light' | 'dark'

  return (
    <>
      <CSSReset />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}
      >
        <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
        <Banner />
        <Header />
        <Timeline playlists={config.playlists} searchValue={searchValue} />
      </div>
    </>
  )
}
