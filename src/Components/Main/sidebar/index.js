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
                <Carts></Carts>
                <Form formOpen={this.state.formOpen}/>
            </Container>
        )
    }
}

export default Sidebar
