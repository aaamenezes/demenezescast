import styled from 'styled-components'

export const StyledRegisterPodcast = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: ${ ({ theme }) => theme.background };
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: ${ ({ theme }) => theme.brand_50 };
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
    background-color: ${ ({ theme }) => theme.background };
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${ ({ theme }) => theme.brand_50 };
  }
  .form-wrapper {
    position: fixed;
    z-index: 100;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    display: grid;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    padding: 5%;
    background-color: rgba(0,0,0,0.5);
  }
  .search-form {
    background-color: ${ ({ theme }) => theme.brand_50 };
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 16px;
    padding-top: 40px;
  }
  input {
    border-radius: 2px;
    border: 1px solid ${ ({ theme }) => theme.neutral_500 };
    padding: 8px 10px;
    margin-bottom: 1rem;
    outline: none;
    color: ${ ({ theme }) => theme.color };
    background-color: ${ ({ theme }) => theme.background };
  }

  .submit-button {
    margin-bottom: 1rem;
  }

  .results-wrapper {
    padding: 1rem;
    background-color: ${ ({ theme }) => theme.brand_50 };
    overflow-y: auto;
    
    .podcast-item {
      display: flex;
      max-width: 550px;
      margin: 0 auto 2rem;
      padding: 1rem;
      background-color: ${ ({ theme }) => theme.background };
  
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

        .add-podcast {
          color: ${ ({ theme }) => theme.background };
          background-color: ${ ({ theme }) => theme.brand_50 };
        }
      }
    }
  }
`
