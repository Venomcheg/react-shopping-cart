import React, {Component} from "react"
import {Container, EmptyCart, Item, List, Wrapper, Total, Proceed} from "./carts"
import Cart from "./cart"
import formatCurrency from "../../../../util";
import {connect} from "react-redux";
import {clearOrder} from "../../../../actions/orderActions";
import {removeFromCart} from "../../../../actions/cartActions";
import Modal from "react-modal"
import MakeOrder from "./makeOrder";


class Carts extends Component {
closeModal =() => {
  this.props.clearOrder()
}

  render() {
    const {cartItems} = this.props
    return (
      <Container>
        <Wrapper>
          {cartItems.length === 0 ? (
            <EmptyCart>Cart is empty</EmptyCart>
          ) : (
            <Item>You have {cartItems.length} in the cart</Item>
          )}
            {this.props.order &&
            <Modal isOpen={true} onRequestClose={this.closeModal}>
            <MakeOrder order={this.props.order} closeModal={this.closeModal}/>

          </Modal>}
        </Wrapper>
        <Wrapper>
          <List>
            {cartItems.map((item, index) =>
              <Cart
                delay={index + 1}
                key={cartItems._id}
                product={item}
                removeFromCart={this.props.removeFromCart}
              />
            )}
          </List>
          {cartItems.length > 0 &&
          <Total>
            <div>
              Total: {" "}
              {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
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

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    order: state.order.order
  }
}

export default connect(mapStateToProps, {removeFromCart, clearOrder})(Carts)