import styled, {keyframes} from "styled-components"
import {showComponent} from '../../../../global-styles'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  img {
    max-width: 37rem;
    max-height: 37rem;
  }
`
export const Wrapper = styled.li`
position:relative;
  flex: 0 1 29rem;
  height: 47rem;
  padding: 1rem;
  margin-bottom: 1rem;
  animation: ${showComponent('translateY(100vh)', 'translateY(0)')} ${props => (props.delay*0.2)+1}s ease-in-out;
`
export const PrimaryButton = styled.button`
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  background-color: #f0c040;
`
export const Link = styled.a`
  color: blue;
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${PrimaryButton},div {
    text-align: center;
    flex: 1;
  }
  div {
    font-size: 2rem;
  }
`
