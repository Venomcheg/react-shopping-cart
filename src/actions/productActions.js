import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRISE} from "../types";

export const fetchActions = () => async (dispatch) => {

    const res = await fetch("/api/products")
    const data = await res.json()
    dispatch({
        type:FETCH_PRODUCTS,
        payload: data
    })
}
export const filterProducts = (products, size) => (dispatch) => {
    debugger
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size,
            items: size === ""? products : products.filter(item => item.availableSizes.indexOf(size)>=0)
        }
    })
}

export const sortProducts = (filteredProducts, priceFilter) => (dispatch) => {

    const sortedProducts = filteredProducts.slice()
    if(priceFilter === 'latest') {
        sortedProducts.sort((a,b) => (a._id - b._id))
    } else {
        sortedProducts.sort((a,b) =>
            priceFilter === "lowest" ? (a.price - b.price) : (b.price - a.price)
        )
    }
    dispatch({
        type: ORDER_PRODUCTS_BY_PRISE,
        payload: {
            priceFilter,
            items: sortedProducts
        }
    })
}