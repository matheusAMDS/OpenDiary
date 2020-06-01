import styled from 'styled-components'

export const CommentCardContainer = styled.div`
  margin-top: 10px;
  padding: 5px;
  background-color: #edf1fa;
  border: 0;
  border-radius: 10px;

  display: flex;
  flex-flow: row nowrap;
  
`

export const CommentContentContainer = styled.div`
  margin-left: 10px;
`

export const ByUserPic = styled.img`
  max-width: 53px;
  max-height: 58px;
  border: 1px solid #eee;
`

export const ByUserName = styled.span`
  font-size: 16px;
  font-weight: 600;
  display: block;
`

export const CreatedAt = styled.span`
  color: #aaa;
  font-size: 14px;
`

export const Text = styled.p`
  margin-top: 8px;
  font-size: 14px;
`

export const Likes = styled.div`
  font-size: 13px;
  margin-top: 10px;
  
  span {
    cursor: pointer;
    color: royalblue
  }
  span:hover {
    text-decoration: underline;
  }
`