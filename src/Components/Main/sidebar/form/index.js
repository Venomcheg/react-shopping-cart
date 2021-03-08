import React, {Component} from 'react';
import {Container, Enter, Item, Window, Input} from "./form";
import {connect} from "react-redux";
import {createOrder, clearOrder} from "../../../../actions/orderActions";


class Form extends Component {
  state = {
    name: "",
    email: "",
    address: "",
  }
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  createOrder = (e) => {
    e.preventDefault()
    const order = {
      email: this.state.email,
      name: this.state.name,
      address: this.state.address,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
      cartItems: this.props.cartItems,
    }
    this.props.createOrder(order)
  }

  render() {
      if (this.props.formOpen) {return <Container>
      <Window onSubmit={this.createOrder}>
      <Item>
      <label>
      Email:
      </label>
      <Input name={"email"} type="email" onChange={this.handleInput} required/>
      </Item>
      <Item>
      <label>
      Name:
      </label>
      <Input name="name" type="text" onChange={this.handleInput}/>
      </Item>
      <Item>
      <label>
      Address:
      </label>
      <Input name={"address"} type="address" onChange={this.handleInput}/>

      </Item>
      <Enter type={"submit"}>
      Go on
      </Enter>
      </Window>
      </Container>}
      else {return <div></div>}

  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    order: state.order.order
  }
}
export default connect(mapStateToProps, {createOrder, clearOrder})(Form);