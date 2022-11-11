import React, { useState } from 'react'
import { StyledRegisterVideo } from './styles'

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

export default function RegisterVideo() {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  const registerForm = useForm({
    initialValues: { title: '', url: '' }
  })

  function handleSubmit(event) {
    event.preventDefault()
    console.log('registerForm.values:', registerForm.values)
    registerForm.clearForm()
    setTimeout(() => {
      setModalIsOpen(false)
    }, 1000)
  }

  return (
    <StyledRegisterVideo>
      <button
        type='button'
        className='add-video'
        onClick={() => setModalIsOpen(true)}
      >
        +
      </button>
      {modalIsOpen && (
        <form onSubmit={handleSubmit}>
          <div>
            <button type='button' className='close-modal'>
              &times;
            </button>
            <input
              type='text'
              placeholder='Título do vídeo'
              name='title'
              value={registerForm.values.title}
              onChange={registerForm.handleChange}
            />
            <input
              type='text'
              placeholder='URL do vídeo'
              name='url'
              value={registerForm.values.url}
              onChange={registerForm.handleChange}
            />
            <button type='submit'>Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}
