import React from "react"
import formatCurrency from "../../../../util"
import { Container, Link, Price, PrimaryButton, Wrapper } from "./product"

const Product = (props) => {
  return (
    <Wrapper>
      <Container>
        <Link href={`#${props._id}`}>
          <img src={props.image} alt={props.title} />
          <p>{props.title}</p>
        </Link>
        <Price>
          <div>{formatCurrency(props.price)}</div>
          <PrimaryButton>Add To Cart</PrimaryButton>
        </Price>
      </Container>
    </Wrapper>
  )
}

export default Product
