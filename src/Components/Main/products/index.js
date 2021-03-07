import { Container, List, ListItem } from "./products"
import React, { Component } from "react"
import Product from "./product"
import Modal from 'react-modal'
import ModalContainer from "./product/modal";

export default class Products extends Component {
    state = {
        product:null
    }
   openModal = (product) => {
    this.setState({product})
    }
    closeModal = () => {
        this.setState({product:null})
    }
  render() {
    return (
      <Container>
              <List>
                    {this.props.products.map((item,index) => {
                        return <Product
                        delay={index+1}
                        key={item.id}
                        product={item}
                        addProducts={this.props.addProducts}
                        openModal={this.openModal}
                        />}
                    )
                    }
              </List>
          {this.state.product &&
          <Modal isOpen={true} onRequestClose={this.closeModal}>
              <ModalContainer product={this.state.product} addProducts={this.props.addProducts} closeModal={this.closeModal}/>

          </Modal>}
      </Container>

    )
  }
}
