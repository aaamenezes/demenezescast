import React, { useContext, useState } from 'react'
import { Client } from 'podcast-api'
import { StyledRegisterPodcast } from './styles'
import { ColorModeContext } from '../ColorMode'
import { podcastService } from '../../services/podcastService'

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

function CategoryToAdd() {
  const [ categoryToAdd, setCategoryToAdd ] = useState('')
  const { podcasts } = useContext(ColorModeContext)

  return (
    <>
      <input
        type='text'
        name='category'
        placeholder='Categoria/Assunto'
        value={categoryToAdd}
        onChange={event => setCategoryToAdd(event.target.value)}
        list='categories-list'
        label='categories-list'
        required
      />
      <datalist id='categories-list'>
        {podcasts.map(podcast => (
          <option
            value={podcast.category}
            label={podcast.category}
            key={`${ podcast.id }-${ Math.random() }`}
          />
        ))}
      </datalist>
    </>
  )
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

    podcastClient
      .search(searchOptions)
      .then(response => setSearchResult(response.data.results))
  }

  function insertPodcastinDatabase(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const podcastToInsert = {
      title: formData.get('title'),
      url: formData.get('url'),
      thumb: formData.get('thumb'),
      category: formData.get('category')
    }

    podcastService()
      .insert(podcastToInsert)
      .then(() => setModalIsOpen(false))
  }

  const searchResultsElements = searchResults.map(podcast => (
    <div className='podcast-item' key={`${ podcast.id }-${ Math.random() }`}>
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
          <input
            type='hidden'
            name='title'
            value={podcast.title_original || ''}
          />
          <input
            type='hidden'
            name='url'
            value={podcast.website || ''}
          />
          <input
            type='hidden'
            name='thumb'
            value={podcast.thumbnail || ''}
          />
          <CategoryToAdd />
          <button type='submit' className='add-podcast'>Add +</button>
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
        <div className='form-wrapper'>
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
          <div className='results-wrapper styled-scrollbar'>
            {searchResultsElements}
          </div>
        </div>
      )}
    </StyledRegisterPodcast>
  )
}
