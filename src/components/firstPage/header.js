import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = () => (
  <MainDiv>
    <StyledLink to="/">LOGO</StyledLink>
    <Menu>
      <li>
        <MenuLink to="/">Hem</MenuLink>
      </li>
      <li>
        <MenuLink to="/">Våra tjänster</MenuLink>
      </li>
      <li>
        <MenuLink to="/">Hur vi jobbar</MenuLink>
      </li>
      <li>
        <MenuLink to="/">ROT-avdrag</MenuLink>
      </li>
      <li>
        <MenuLink to="/">Referencser</MenuLink>
      </li>
    </Menu>
  </MainDiv>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledLink = styled(Link)`
  font-size: 30px;
  font-family: Rokkitt, serif;
`
const MainDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`
const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;

  li {
    margin: 0;
  }

  a {
    font-size: 16px;
    text-decoration: none;
  }
`

const MenuLink = styled(Link)`
  padding: 16px;
  color: black;
`
