import React, { createContext, useEffect, useState } from 'react'
import { categorizePodcasts } from '../services/categorizePodcasts'
import { podcastService } from '../services/podcastService'

export const ColorModeContext = createContext({
  mode: 'light', // 'dark
  setMode: () => {},
  podcasts: [],
  setPodcasts: () => {}
})

export default function ColorModeProvider({ children, initialMode }) {
  const [ mode, setMode ] = useState(initialMode) // 'light' | 'dark'
  const [ podcasts, setPodcasts ] = useState([])

  useEffect(() => {
    const storageMode = localStorage.getItem('storageMode')

    if (storageMode) {
      setMode(storageMode)
    } else {
      localStorage.setItem('storageMode', 'light')
    }
  }, [])

  useEffect(() => {
    const service = podcastService()
    service.getAllPodcasts().then(response => {
      const uncategorizedPodcasts = response.data
      const categorizedPodcasts = categorizePodcasts(uncategorizedPodcasts)
      setPodcasts(categorizedPodcasts)
    })
  }, [])

  function handleMode() {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('storageMode', newMode)
  }

  return (
    <ColorModeContext.Provider
    // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ mode, handleMode, podcasts, setPodcasts }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}
