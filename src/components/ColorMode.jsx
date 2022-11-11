import React, { createContext, useEffect, useState } from 'react'

export const ColorModeContext = createContext({
  mode: 'light', // 'dark
  setMode: () => {}
})

export default function ColorModeProvider({ children, initialMode }) {
  const [ mode, setMode ] = useState(initialMode) // 'light' | 'dark'

  useEffect(() => {
    const storageMode = localStorage.getItem('storageMode')

    if (storageMode) {
      setMode(storageMode)
    } else {
      localStorage.setItem('storageMode', 'light')
    }
  }, [])

  function handleMode() {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('storageMode', newMode)
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ColorModeContext.Provider value={{ mode, handleMode }}>
      {children}
    </ColorModeContext.Provider>
  )
}
