import React from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { Link, useHistory } from 'react-router-dom'
import { MdExitToApp, MdHome } from 'react-icons/md'

import {
  HeaderContainer,
  NavBar,
  AppName
} from './styles'

function Header({ isLoggedIn }) {
  const client = useApolloClient()
  const history = useHistory()

  function logout() {
    localStorage.removeItem('token')
    client.writeData({ data: { isLoggedIn: false }})
  }

  return (
    <HeaderContainer>
      <Link to="/home">
        <AppName>Open Diary</AppName>
      </Link>

      {isLoggedIn ? (
        <NavBar>
          <MdHome
            title="Home"
            style={{ color: "white", cursor: "pointer" }} 
            size={28}
            onClick={() => history.push('/home')}
          />
          <MdExitToApp
            title="Logout"
            style={{ color: "white", cursor: "pointer" }} 
            size={28}
            onClick={logout}
          />
        </NavBar>
      ) : null}
    </HeaderContainer>
  )
}

export default Header