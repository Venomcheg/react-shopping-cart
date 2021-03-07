import React from "react"
import formatCurrency from "../../../../../util"
import { Container, Remove, Right } from "./cart"

const Cart = (props) => {
  return (
    <Container>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <div>{props.title}</div>
        <Right>
          {formatCurrency(props.price)} X {props.count}{" "}
          <Remove onClick={() => props.removeItem(props)}>Remove</Remove>
        </Right>
      </div>
    </Container>
  )
}

export default Cart
