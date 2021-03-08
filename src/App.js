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
  render() {
    return (
        <Provider store={store}>
          <GlobalStyles />
          <Wrapper>
            <Header />
            <Main
            />
            <Footer />
          </Wrapper>
        </Provider>
    )
  }
}

export default App
