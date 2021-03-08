import React from "react"
import Filter from "./filter"
import { Content, Container, MainContainer } from "./Main"
import Products from "./products"
import Sidebar from "./sidebar"
const Main = (props) => {
  return (
    <Container>
      <Content>
        <MainContainer>
          <Filter
          />
          <Products/>
        </MainContainer>
        <Sidebar/>
      </Content>
    </Container>
  )
}
export default Main
