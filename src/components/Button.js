import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { seaGreen } from "./colors"

export const BUTTON_STYLES = {
  default: "default",
  ghost: "ghost",
  ghostInvert: "ghostInvert",
  link: "link",
  menu: "menu",
}

export const BUTTON_SIZES = {
  default: "default",
  tiny: "tiny",
  large: "large",
}

const StyledButton = styled.button`
  display: block;
  transition: all 0.1s ease-in;
  text-decoration: none;
  padding: 10px 50px;
  border-radius: 30px;

  ${p =>
    p.lookLike === BUTTON_STYLES.default &&
    `
    background: ${seaGreen};
    color: #ffffff;

    &:hover {
      background: ${seaGreen};
      color: #ffffff;
      text-decoration: none;
    }
  `}
`

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

Button.propTypes = {
  lookLike: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  lookLike: "default",
  size: "default",
}

export default Button
