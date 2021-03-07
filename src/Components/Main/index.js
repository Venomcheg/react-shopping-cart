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
            count={props.addProducts}
            size={props.size}
            sort={props.sort}
            filterProducts={props.filterProducts}
            sortProducts={props.sortProducts}
          />
          <Products products={props.products} addProducts={props.addProducts} />
        </MainContainer>
        <Sidebar cartItems={props.cartItems} removeItem={props.removeItem} />
      </Content>
    </Container>
  )
}
export default Main
