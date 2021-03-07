import styled, {keyframes} from 'styled-components'
const zoom = keyframes`
from {
transform: scale(0.1);
}
to {
transform: scale(1);
}
`
export const Container = styled.div`
width: 100%;
height: 100%;
animation: ${zoom} 0.3s ease-in-out;
img {
max-height: 100vh;
max-width: 46rem;
margin: 0 auto
}
`
export const Information = styled.div`

`
export const Price = styled.div`
display:flex;
align-items: center;
font-size: 2rem;
button {
margin-left: 2rem;
}
`
export const AddToCart = styled.button`
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  background-color: #f0c040;
`
export const CloseModal = styled.button`
position:absolute;
right: 1rem;
top: 2.5rem;

`