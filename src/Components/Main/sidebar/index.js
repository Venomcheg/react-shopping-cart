import React from "react"
import Carts from "./carts"
import { Container } from "./sidebar"
import Form from "./form";

class Sidebar extends React.Component {
    state = {
        formOpen:false
    }
    openForm = () => {
        this.setState({formOpen: true})
    }
    render() {
        return (
            <Container>
                <Carts openForm={this.openForm} cartItems={this.props.cartItems}
                       removeItem={this.props.removeItem}></Carts>
                <Form formOpen={this.state.formOpen} cartItems={this.props.cartItems} createOrder={this.props.createOrder}/>
            </Container>
        )
    }
}

export default Sidebar
