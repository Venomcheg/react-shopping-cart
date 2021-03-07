import {Container, List} from "./products"
import React, {Component} from "react"
import Product from "./product"
import Modal from 'react-modal'
import ModalContainer from "./product/modal";
import {connect} from "react-redux";
import {fetchActions} from "../../../actions/productActions";


class Products extends Component {
    state = {
        product: null
    }
    componentDidMount() {
        this.props.fetchActions()
    }

    openModal = (product) => {
        this.setState({product})
    }
    closeModal = () => {
        this.setState({product: null})
    }

    render() {

        return (
            <Container>
                {!this.props.products ? <div>Loading...</div> : <List>

                    {this.props.products.map((item, index) => {
                            return <Product
                                delay={index + 1}
                                key={item.id}
                                product={item}
                                addProducts={this.props.addProducts}
                                openModal={this.openModal}
                            />
                        }
                    )
                    }
                </List>}

                {this.state.product &&
                <Modal isOpen={true} onRequestClose={this.closeModal}>
                    <ModalContainer product={this.state.product} addProducts={this.props.addProducts}
                                    closeModal={this.closeModal}/>

                </Modal>}
            </Container>

        )
    }
}

export default connect((state) => ({products: state.products.items}), {fetchActions})(Products)