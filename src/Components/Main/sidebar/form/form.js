import styled from "styled-components";
import {showComponent} from '../../../../global-styles'
export const Container = styled.div`
position: relative;
display: flex;
animation: ${showComponent('translateX(100px)', 'translateX(0px)')} .5s ease-in-out;
`
export const Window = styled.form`
width: 100%;
list-style: none;
`
export const Item = styled.li`
display: flex;
flex-direction: column;
margin-bottom: 1rem;
`
export const Enter = styled.button`
  padding: 1rem;
  width: 100%;
  border: 0.1rem #c0c0c0 solid;
  background-color: #f0c040;
`
export const Input = styled.input`
  padding: 1rem;
  border: .1rem solid #c0c0c0 
`