import React, { useState } from 'react'
import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Timeline from '../src/components/Timeline'
import Banner from '../src/components/Banner'

export default function HomePage() {
  const [ searchValue, setSearchValue ] = useState('')

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
      />
      <Banner />
      <Header />
      <Timeline searchValue={searchValue} />
    </div>
  )
}
