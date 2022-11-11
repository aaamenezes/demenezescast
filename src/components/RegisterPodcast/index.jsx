import React, { useState } from 'react'
import { Client } from 'podcast-api'
import { createClient } from '@supabase/supabase-js'
import { StyledRegisterPodcast } from './styles'

function useForm({ initialValues }) {
  const [ values, setValues ] = useState(initialValues)

  function handleChange(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  function clearForm() {
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    clearForm
  }
}

export default function RegisterPodcast() {
  const [ searchResults, setSearchResult ] = useState([])
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  const registerForm = useForm({
    initialValues: { title: '', url: '', thumb: '' }
  })

  function searchPodcasts(event) {
    event.preventDefault()
    /**
     * LISTEN NOTES
     * Doc: https://www.listennotes.com/api/docs/?lang=nodejs#get-api-v2-search
     */
    const apiKey = 'da9985f6ef25403dac245e12be0ba4ed'
    const podcastClient = Client({ apiKey })
    const keywordSearch = registerForm.values.title
    const searchOptions = {
      q: keywordSearch,
      type: 'podcast',
      only_in: 'title,description',
      language: 'Portuguese' // Portuguese | English
    }

    podcastClient.search(searchOptions)
      .then(response => setSearchResult(response.data.results))
      .catch(console.error)
  }

  function insertPodcastinDatabase(event) {
    event.preventDefault()
    const formData = {}
    Array.from(event.target.querySelectorAll('*')).forEach(input => {
      if (input.tagName === 'INPUT') formData[input.name] = input.value
    })

    formData.category = 'default category'

    const API_URL = 'https://bxfwuyweuulatsylxysg.supabase.co'
    // eslint-disable-next-line max-len
    const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4Znd1eXdldXVsYXRzeWx4eXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjcxOTYsImV4cCI6MTk4Mzc0MzE5Nn0.tJqjs9FvT80--Abwe4qeowVPgpojMjymMKox_h9-_nw'
    const supabase = createClient(API_URL, API_KEY)

    supabase.from('podcasts').insert(formData)
      .then(console.log)
      .catch(console.error)
  }

  const searchResultsElements = searchResults.map(podcast => (
    <div className='podcast-item'>
      <img
        src={podcast.thumbnail}
        alt={`Thumbnail of ${ podcast.title }`}
      />
      <div className='infos'>
        <a
          href={podcast.website}
          title={`Link to ${ podcast.title } page`}
          target='_blank'
          rel='noreferrer'
        >
          <h3>{podcast.title_original}</h3>
        </a>
        <form onSubmit={insertPodcastinDatabase}>
          <input type='hidden' name='title' value={podcast.title_original} />
          <input type='hidden' name='url' value={podcast.website} />
          <input type='hidden' name='thumb' value={podcast.thumbnail} />
          <button type='submit'>Add +</button>
        </form>
      </div>
    </div>
  ))

  return (
    <StyledRegisterPodcast>
      <button
        type='button'
        className='add-video'
        onClick={() => setModalIsOpen(true)}
      >
        +
      </button>
      {modalIsOpen && (
        <div className='form-wrapper styled-scrollbar'>
          <form onSubmit={searchPodcasts} className='search-form'>
            <button
              type='button'
              className='close-modal'
              onClick={() => setModalIsOpen(false)}
            >
              &times;
            </button>
            <input
              type='text'
              placeholder='Pesquisar podcast...'
              name='title'
              value={registerForm.values.title}
              onChange={registerForm.handleChange}
            />
            <button type='submit' className='submit-button'>Pesquisar</button>
          </form>
          <div className='results-wrapper'>
            {searchResultsElements}
          </div>
        </div>
      )}
    </StyledRegisterPodcast>
  )
}
