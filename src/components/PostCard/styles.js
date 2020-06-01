import styled from 'styled-components'

export const PostCardContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 3px 3px 7px lightgray;
  background-color: white;
  border: 0;
  border-radius: 5px;
`

export const PostMainContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const PostContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  
  width: 100%;
  margin-left: 10px;

  p {
    margin: 10px 0;
    color: black;
  }
`

export const ByUserName = styled.span`
  font-size: 20px;
  color: black;
  display: inline;
`

export const CreatedAt = styled.span`
  color: #aaa;
  font-size: 15px;
`

export const ByUserPic = styled.img`
  width: 69px;
  height: 85px;
  margin-right: 15px;
  border: 1px solid #ddd;
`

export const ImagesDisplay = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin: 12px 0;

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
    border: 1px solid #ddd;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
`

export const PostDataContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export const PostLikes = styled.span`
  font-size: 16px;
  color: #bbb;
`

export const PostCommentsCount = styled.span`
  margin-right: 6px;
  font-size: 16px;
  color: #bbb;
`