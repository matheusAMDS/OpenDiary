import gql from "graphql-tag"

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`

export const USER_DATA = gql` 
  query Me {
    me {
      _id
      name
      username
      peeking
    }
  }
`

export const USER_DATA_BY_USERNAME = gql`
  query User($username: String!) {
    user(username: $username) {
      name
      username
      userPic
      bio
      peeking { _id }
      peekedBy { _id }
    }
  }
`

export const HOME_FEED_DATA = gql`
  query Home($page: Int) {
    me {
      _id
      name
      username
      userPic
      bio
      peeking
      peekedBy
    }
    feed(page: $page) {
      nextPage
      docs {
        _id
        text
        images
        likes
        likeCount
        commentsCount
        createdAt
        byUser {
          _id
          name
          username
          userPic
          peekedBy
        }
      }  
    }
  }
`

export const PROFILE_FEED_DATA = gql`
  query Profile($username: String!, $page: Int) {
    user(username: $username) {
      _id
      name
      username
      userPic
      bio
      peeking 
      peekedBy 
    }
    profile(username: $username, page: $page) {
      nextPage
      docs {
        _id
        text
        images
        likes
        likeCount
        createdAt
        commentsCount
        byUser {
          _id
          name
          username
          userPic
          peekedBy
        }
      }  
    }
  }
`

export const GET_PAGE = gql`
  query GetPost($postId: ID!) {
    post(postId: $postId) {
      text
      images
      byUser {
        name
      }
      likeCount
      comments {
        text 
        likeCount 
        byUser {
          name
        }
      }
      createdAt
    }
  }
`

export const GET_COMMENTS = gql`
  query GetComments($postId: ID!) {
    comments(postId: $postId) {
      _id 
      text 
      likes 
      likeCount
      createdAt
      byUser {
        _id 
        name 
        username
        userPic
      }
    }
  }
`