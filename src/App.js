// feature 1
import React from "react"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import { GlobalStyles, Wrapper } from "./global-styles"

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </>
  )
}

export default App
