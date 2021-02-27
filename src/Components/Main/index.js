import React from "react"
import { Content, Container, MainContainer } from "./Main"
import Products from "./products"
import Sidebar from "./sidebar"
import styled from "styled-components"
const Component = styled.div`
  position: fixed;
  left: 50vh;
  top: 50%;
`
const Main = (props) => {
  return (
    <Container>
      <Content>
        <MainContainer>
          <Products products={props.products} />
          <Component>fadsаааааааааааfa</Component>
        </MainContainer>
        <Sidebar />
      </Content>
    </Container>
  )
}
export default Main
