// feature 1
import React from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Main from "./Components/Main"
import { GlobalStyles, Wrapper } from "./global-styles"
import data from "./data.json"

class App extends React.Component {
  state = {
    products: data.products,
    size: "",
    sort: "",
  }
  sortProducts = (event) => {
    const sort = event.target.value
    this.setState((state) => ({
      sort,
      products: state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }))
  }
  filterProducts = (event) => {
    if (event.target.value === 0) {
      this.setState({ size: event.target.value, products: data.products })
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      })
    }
  }
  render() {
    return (
      <>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <Main
            {...this.state}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
          />
          <Footer />
        </Wrapper>
      </>
    )
  }
}

export default App
