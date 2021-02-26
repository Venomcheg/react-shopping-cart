import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  grid-area: Header;
  padding: 0.5rem;
  background-color: #203040;
  .link {
    text-decoration: none;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <a className="link" href="/">
        React Shopping Cart
      </a>
    </HeaderContainer>
  )
}

export default Header
