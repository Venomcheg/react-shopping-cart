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
            count={props.products.length}
            size={props.size}
            sort={props.sort}
            filterProducts={props.filterProducts}
            sortProducts={props.sortProducts}
          />
          <Products products={props.products} />
        </MainContainer>
        <Sidebar />
      </Content>
    </Container>
  )
}
export default Main
