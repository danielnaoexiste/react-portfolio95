import styled from "styled-components"

export const StyledLink = styled.a`
  text-decoration: none;
  color: #000000;

  &:visited {
    color: #000000 !important;
  }

  &:hover {
    color: #ffffff !important;
  }

  span > svg {
    fill: #000000 !important;
  }

  &:hover > span > svg {
    fill: #ffffff !important;
  }
`
