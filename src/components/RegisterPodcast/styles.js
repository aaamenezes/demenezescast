import styled from 'styled-components'

export const StyledRegisterPodcast = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: ${ ({ theme }) => theme.backgroundColor };
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  button[type="submit"] {
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${ ({ theme }) => theme.backgroundColor };
  }
  .form-wrapper {
    overflow-y: auto;
    width: 100%;
    padding: 5%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    left: 50%;
    right: 0;
    z-index: 100;
    justify-content: center;
  }
  .search-form {
    background-color: ${ ({ theme }) => theme.backgroundColor };
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 16px;
    padding-top: 40px;
  }
  input {
    border-radius: 2px;
    border: 1px solid ${ ({ theme }) => theme.borderBase };
    padding: 8px 10px;
    margin-bottom: 1rem;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${ ({ theme }) => theme.textColorBase };
    background-color: ${ ({ theme }) => theme.backgroundBase };
  }

  .submit-button {
    margin-bottom: 1rem;
  }

  .results-wrapper {
    padding: 1rem;
    background-color: ${ ({ theme }) => theme.backgroundColor };
    
    .podcast-item {
      display: flex;
      max-width: 550px;
      margin: 0 auto 2rem;
      padding: 1rem;
      background-color: ${ ({ theme }) => theme.border };
  
      img {
        margin-right: 1rem;
        max-width: 150px;
      }
      
      a {
        color: currentColor;
      }

      .infos {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
`
