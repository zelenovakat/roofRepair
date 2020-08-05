import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MobileMenu from "./MobileMenu"
import { mediaSmall, mediaXs } from "../Screen"
import LogoImg from "../../images/logo.png"
import { MainContainer } from "../styles"
import { bgColor, darkGreen, activeBlue } from "../colors"

const Header = () => (
  <MainContainer background={bgColor}>
    <MainDiv>
      <LogoLink to="/">
        <img src={LogoImg} alt="AstiTak logotyp" width="400" height="400" />
      </LogoLink>

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
          <MenuLink to="/">Referenser</MenuLink>
        </li>
      </Menu>
    </MainDiv>
  </MainContainer>
)

export default Header

const MobileMenuDiv = styled.div`
  display: flex;

  ${mediaSmall} {
    display: none;
  }
`
const LogoLink = styled(Link)`
  img {
    height: 100px;
    width: auto;
    margin: 0;
  }
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
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
    font-size: 18px;
    font-weight: bold;
    color: ${darkGreen};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      color: ${activeBlue};
    }
  }
`

const MenuLink = styled(Link)`
  padding: 16px;
  color: #000000;
`
