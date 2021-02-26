import React from "react"
import styled from "styled-components"
const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Footer;
  color: #ffffff;
  background-color: #203040;
`
const Footer = () => {
  return <FooterContainer>All right is reserved</FooterContainer>
}

export default Footer
