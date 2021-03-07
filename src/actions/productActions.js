import {FETCH_PRODUCTS} from "../types";

export const fetchActions = () => async (dispatch) => {

    const res = await fetch("/api/products")
    const data = await res.json()
    debugger
    dispatch({
        type:FETCH_PRODUCTS,
        payload: data
    })
}