import React from 'react'
import {CloseButton, Container, OrderDetails, SuccessMessage, Item} from "./makeorder";
import formatCurrency from "../../../../../util";
const MakeOrder =(props) => {
  return(
    <>
    <CloseButton onClick={props.closeModal}>
      X
    </CloseButton>
    <Container>
      <OrderDetails>
        <SuccessMessage>
          Your order has been placed.
        </SuccessMessage>
        <h2>Order {props.order._id}</h2>
        <ul>
          <li>
            <p>Name: </p>
            <Item>{props.order._id}</Item>
          </li>
          <li>
            <p>Email: </p>
            <Item>{props.order.email}</Item>
          </li>
          <li>
            <p>Address: </p>
            <Item>{props.order.address}</Item>
          </li>
          <li>
            <p>Date: </p>
            <Item>{props.order.createdAt}</Item>
          </li>
          <li>
            <p>Total: </p>
            <Item>{formatCurrency(props.order.total)}</Item>
          </li>
          
          <li>
            <p>Cart items: </p>

              {props.order.cartItems.map(item=>(
                <p>
                  {item.count} {" x "} {item.title}
                </p>
              ))}

          </li>
        </ul>
      </OrderDetails>
    </Container>
    </>
  )
}
export default MakeOrder