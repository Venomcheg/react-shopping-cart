import React from "react"
import Carts from "./carts"
import { Container } from "./sidebar"
import Form from "./form";
import {connect} from "react-redux";

class Sidebar extends React.Component {
    state = {
        formOpen:false
    }
    openForm = () => {
        this.setState({formOpen: true})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if(prevProps.cartItems !== this.props.cartItems){
            (this.props.cartItems<1) && this.setState({formOpen:false})
        }

    }

    render() {

        return (
            <Container>
                <Carts openForm={this.openForm}></Carts>
                <Form formOpen={this.state.formOpen}/>
            </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})
export default connect(mapStateToProps,{})(Sidebar)
