import styled from 'styled-components'

export const UserPanelContainer = styled.section`
  width: 100%;
  max-width: 300px;
  margin: 5px auto;
  padding: 10px;
  box-shadow: 2px 2px 2px lightgray;
  background-color: white;
  border: 0;
  border-radius: 5px;
`

export const Name = styled.h2`
  font-weight: normal;
  text-align: center;
  font-size: 24px;
  margin-top: 10px;
`

export const Username = styled.h3`
  font-size: 17px;
  text-align: center;
  color: #aaa;
  font-weight: normal;
`

export const UserBioInput = styled.textarea`
  width: 100%;
  resize: none;
  text-align: center;
  margin: 10px auto;
`

export const UserBio = styled.p`
  text-align: center;
  margin: 10px auto;
`

export const UserPicContainer = styled.div`
  width: 110px;
  height: 135px;
  margin: 0 auto;
  position: relative;
  border: 1px solid #ddd;
`

export const UserPic = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: block;
`

export const PeekData = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;

  margin: 12px 0;

  span {
    font-size: 17px;
    color: royalblue;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`