import React from "react"
import formatCurrency from "../../../../util"
import { Container, Link, Price, PrimaryButton, Wrapper } from "./product"

const Product = (props) => {

  const { _id, image, title, price } = props.product
  return (
    <Wrapper delay={props.delay}>
      <Container>
        <Link href={`#${_id}`} onClick={() => props.openModal(props.product)}>
          <img src={image} alt={title} />
          <p>{title}</p>
        </Link>
        <Price>
          <div>{formatCurrency(price)}</div>
          <PrimaryButton onClick={() => props.addToCart(props.product)}>
            Add To Cart
          </PrimaryButton>
        </Price>
      </Container>
    </Wrapper>
  )
}

export default Product
