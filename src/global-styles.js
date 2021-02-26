import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
*,*:before, *:after{
	box-sizing:border-box;
}

html {
	font-size: 62.5%;
}
body,input,select,textarea {
	font-size:1.6rem;
	font-family: Helvetica, Arial, sans-serif,
}
html, body, #root {
	margin: 0;
	height: 100%;
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	 background-color: #fff;
	 color: #333333;
}
a {
	color: #fff;
	&:hover {
color: #ff8000;
	}
}
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "Header" "Main" "Footer";
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-columns: 1fr;
  height: 100%;
`
