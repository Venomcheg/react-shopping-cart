import React from "react"
import Carts from "./carts"
import { Container } from "./sidebar"

const Sidebar = (props) => {
  return (
    <Container>
      <Carts cartItems={props.cartItems} removeItem={props.removeItem}></Carts>
    </Container>
  )
}

export default Sidebar
