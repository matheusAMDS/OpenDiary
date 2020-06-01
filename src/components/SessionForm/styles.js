import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: white;
  margin: 10vh auto;
  padding: 10px;

  h2 {
    color: gray;
    font-size: 28px;
    text-align: center;
    margin: 7px 0 15px 0;
  }

  button, input {
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 4px;
    font-size: 17px;
    padding: 7px;
    margin: 10px 0;
  }

  button {
    color: white;
    cursor: pointer;
    background-color: royalblue;
    border: 1px solid royalblue;
  }

  a {
    font-size: 17px;
    text-align: center;
    color: gray;
    text-decoration: underline;
    margin-top: 15px;
  }
`