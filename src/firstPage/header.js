import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MobileMenu from "../firstPage/MobileMenu"
import { mediaSmall, mediaXs } from "../components/Screen"

const Header = () => (
  <MainDiv>
    <StyledLink to="/">LOGO</StyledLink>
    <MobileMenuDiv>
      <MobileMenu />
    </MobileMenuDiv>
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

const MobileMenuDiv = styled.div`
  display: flex;

  ${mediaSmall} {
    display: none;
  }
`
const StyledLink = styled(Link)`
  font-size: 30px;
  font-family: Rokkitt, serif;
  margin-left: 10px;
`
const MainDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`
const Menu = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  margin: 0;

  ${mediaXs} {
    display: flex;
  }

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
