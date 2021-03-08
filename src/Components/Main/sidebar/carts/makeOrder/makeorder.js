import styled, {keyframes} from "styled-components";

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

`
export const CloseButton = styled.button`

`
export const OrderDetails = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
li {
display:flex;
justify-content: space-between;
align-items:center;
p{
margin: 0;
padding: 10px;
}
}
ul {
padding: 0;
}
`
export const SuccessMessage = styled.h3`
color: green;
`
export const Item = styled.p`
text-align: right;
padding: 0;
`