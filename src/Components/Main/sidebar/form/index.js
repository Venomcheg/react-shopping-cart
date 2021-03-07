import React, {Component} from 'react';
import {Container, Enter, Item, Window, Input} from "./form";

class Form extends Component {
    state = {
        name: "",
        email: "",
        address: "",
    }
    handleInput= (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    createOrder = (e) => {
        e.preventDefault()
        const order = {
            name:this.state.name,
            email:this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order)
    }
    render() {
        return (this.props.formOpen &&
                <Container>
                <Window>
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
                    <Enter onClick={this.createOrder} type={"submit"}>
                        Go on
                    </Enter>
                </Window>
            </Container>

    )
}}

export default Form;