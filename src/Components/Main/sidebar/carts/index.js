import React, { Component } from "react"
import { Container, EmptyCart, Item, List, Wrapper, Total, Proceed } from "./carts"
import Cart from "./cart"
import formatCurrency from "../../../../util";

export default class Carts extends Component {

  render() {
    const { cartItems } = this.props

    return (
      <Container>
        <Wrapper>
          {cartItems.length === 0 ? (
            <EmptyCart>Cart is empty</EmptyCart>
          ) : (
            <Item>You have {cartItems.length} in the cart</Item>
          )}
        </Wrapper>
        <Wrapper>
          <List>
            {cartItems.map((item) => {
              return (
                <Cart
                  key={cartItems._id}
                  {...item}
                  removeItem={this.props.removeItem}
                ></Cart>
              )
            })}
          </List>
            {cartItems.length > 0 &&
            <Total>
                <div>
                    Total: {" "}
                    {formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count,0))}
                </div>
                <Proceed onClick={this.props.openForm}>
                    Proceed
                </Proceed>
            </Total>
            }


        </Wrapper>
      </Container>
    )
  }
}
