import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: royalblue;
  padding: 10px 5px;
  position: sticky;
  top: 0;
  z-index: 1;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`

export const AppName = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: white;
` 

export const NavBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  list-style: none;
`