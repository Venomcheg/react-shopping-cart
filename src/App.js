// feature 1
import React from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Main from "./Components/Main"
import { GlobalStyles, Wrapper } from "./global-styles"
import data from "./data.json"
import store from './store'
import {Provider} from "react-redux";

class App extends React.Component {
  state = {
    products: data.products,
    cartItems: JSON.parse(localStorage.getItem("cartItems")) ? JSON.parse(localStorage.getItem("cartItems")) : [],
    showForm: false
  }
  createOrder = (order) => {
    console.log(order)
  }
  getForm = () => {
    const changeFormState = !this.state.showForm
    this.setState({showForm: changeFormState })
  }
  addProducts = (product) => {
    const cartItems = this.state.cartItems.slice()
    let alreadyInCart = false
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++
        alreadyInCart = true
      }
    })
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 })
    }
    this.setState({ cartItems })
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  }
  removeItem = (product) => {
    const cartItems = this.state.cartItems.slice()
    const newArray = cartItems.filter(item => item._id != product._id)
    this.setState({cartItems: newArray})
    localStorage.setItem('cartItems', JSON.stringify(newArray))
  }

  render() {
    return (
        <Provider store={store}>
          <GlobalStyles />
          <Wrapper>
            <Header />
            <Main
                {...this.state}
                addProducts={this.addProducts}
                removeItem={this.removeItem}
                getForm={this.getForm}
                createOrder={this.createOrder}
            />
            <Footer />
          </Wrapper>
        </Provider>
    )
  }
}

export default App
