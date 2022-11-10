import React, { useContext, useState } from 'react'
import config from '../config.json'
import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Timeline from '../src/components/Timeline'
import Banner from '../src/components/Banner'
import { ColorModeContext } from '../src/components/ColorMode'

export default function HomePage() {
  const [ searchValue, setSearchValue ] = useState('')
  const { setMode } = useContext(ColorModeContext)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      width: '100%'
    }}
    >
      <Menu
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setMode={setMode}
      />
      <Banner />
      <Header />
      <Timeline playlists={config.playlists} searchValue={searchValue} />
    </div>
  )
}
