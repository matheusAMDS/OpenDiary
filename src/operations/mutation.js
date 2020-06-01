import gql from 'graphql-tag'

export const LIKE = gql`
  mutation LikePost($to: ID!, $model: String!) {
    like(to: $to, model: $model) 
  }
`

export const DISLIKE = gql`
  mutation DislikePost($to: ID!, $model: String!) {
    dislike(to: $to, model: $model) 
  }
`

export const UPDATE_USER_PIC = gql`
  mutation UpdateUserPic($userPic: Upload!) {
    updateUserPic(userPic: $userPic)
  }
`

export const UPDATE_BIO = gql`
  mutation UpdateBio($bio: String!) {
    updateBio(bio: $bio)
  }
`

export const PEEK_USER = gql`
  mutation Peek($toUser: String!) {
    peek(toUser: $toUser)
  }
`

export const UNPEEK_USER = gql`
  mutation Unpeek($toUser: String!) {
    unpeek(toUser: $toUser)
  }
`

export const CREATE_POST = gql`
  mutation CreatePost($text: String, $images: [Upload]) {
    createPost(text: $text, images: $images) {
      _id
    }
  }
`

export const CREATE_COMMENT = gql`
  mutation CreateComment($text: String!, $to: ID!) {
    createComment(text: $text, to: $to) {
      _id 
      text 
      likes 
      likeCount
      byUser {
        _id 
        name 
        username
        userPic
      }
    }
  }
`