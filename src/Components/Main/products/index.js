import { Container, List, ListItem } from "./products"
import React, { Component } from "react"
import Product from "./product"

export default class Products extends Component {
  render() {
    return (
      <Container>
        <List>
          {this.props.products.map((item) => {
            return <Product key={item.id} {...item} />
          })}
        </List>
      </Container>
    )
  }
}
