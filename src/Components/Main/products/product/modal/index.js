import React from 'react'
import {AddToCart, Container, Information, Price, CloseModal} from "./modal";
import formatCurrency from "../../../../../util";
import Modal from "react-modal";

const ModalContainer = (props) => {

    const {image, title, price, description, availableSizes} = props.product
    return(
        <>
            <CloseModal onClick={props.closeModal}>X</CloseModal>
        <Container>

            <img src={image} alt={title}/>
            <Information>
                <p>
                    <strong>{title}</strong>
                </p>
                <p>
                    {description}
                </p>
                <p>
                    Aviable sizes: {availableSizes.map(item => (
                        <span>{" "}<button>{item}</button></span>
                ))}
                </p>
                <Price>
                    <div>
                        {formatCurrency(price) }
                    </div>
                    <AddToCart onClick={()=> {
                        props.addProducts(props.product)
                        props.closeModal()
                    }}>Add to Cart</AddToCart>
                </Price>
            </Information>
        </Container>
            </>
    )
}

export default ModalContainer