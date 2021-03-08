import React from "react"
import formatCurrency from "../../../../../util"
import { Container, Remove, Right } from "./cart"

const Cart = (props) => {

  return (
    <Container delay={props.delay}>
      <div>
        <img src={props.product.image} alt={props.product.title} />
      </div>
      <div>
        <div>{props.product.title}</div>
        <Right>
          {formatCurrency(props.product.price)} X {props.product.count}{" "}
          <Remove onClick={() => props.removeFromCart(props.product)}>Remove</Remove>
        </Right>
      </div>
    </Container>
  )
}

export default Cart
