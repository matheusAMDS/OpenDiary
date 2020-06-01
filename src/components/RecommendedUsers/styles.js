import styled from 'styled-components'

export const RecommendedContainer = styled.section`
  padding: 8px;
  width: 100%;
  background-color: #fff;

  h3 {
    color: black;
    font-size: 22px;
    margin-left: 5px;
  }
`

export const UsersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`

export const User = styled.div`
  background-color: white;
  padding: 10px 0;
  margin: 5px;
  width: 100%;
  max-width: 190px;
  cursor: pointer;
  border: 2px solid #eee;
  border-radius: 10px;
`

export const Name = styled.span`
  margin-top: 6px;
  display: block;
  font-size: 20px;
  text-align: center;
`

export const Username = styled.span`
  margin-top: 4px;
  display: block;
  font-size: 16px;
  text-align: center;
  color: #aaa;
  font-weight: normal;
`

export const UserPic = styled.img`
  margin: 0 auto;
  width: 74px;
  height: 91px;
  border: 1px solid #ddd;
  display: block;
`