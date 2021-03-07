import styled from "styled-components"

export const Container = styled.div``
export const EmptyCart = styled.div``
export const Item = styled.div``
export const Wrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction:column;
  &:first-child {
    border-bottom: 0.1rem solid #c0c0c0;
  }
`
export const List = styled.ul`
  padding: 0;
  width: 100%;
  list-style: none;
`
export const Total = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
font-size: 2rem;

`
export const Proceed = styled.button`
padding: 1rem;
  background-color:green;
  color: white;
  border: none;
`