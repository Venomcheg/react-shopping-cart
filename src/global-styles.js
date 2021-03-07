import styled, { createGlobalStyle } from "styled-components"
export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "Header" "Main" "Footer";
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-columns: 1fr;
  height: 100%;
`
export const GlobalStyles = createGlobalStyle`
*,*:before, *:after{
	
	box-sizing:border-box;
}
body,#root {
	height: 100vh;
	margin:0;
}
html {
	font-size: 62.5%;
}
body,input,select,textarea,button {
	font-size:1.6rem;
	font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}
body, #root {
	margin: 0;
	height: 100%;

	 background-color: #fff;
	 color: #333333;
}
a {
	text-decoration:none;
	color: #fff;
	&:hover {
color: #ff8000;
	}
}
`
