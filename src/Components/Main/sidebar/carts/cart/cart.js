import styled, {keyframes} from "styled-components"
import {showComponent} from '../../../../../global-styles'
export const Container = styled.li`
  position:relative;
  display: flex;
  img {
    width: 5rem;
  }
  div {
    padding: 0.5rem;
  }
  div:last-child {
    flex: 1;
  }
   animation: ${showComponent('translateX(-300px)', 'translateX(0)')} ${props => (props.delay*0.2)+1}s ease-in-out;
`
export const Right = styled.div`
  text-align: right;
`
export const Remove = styled.button``
