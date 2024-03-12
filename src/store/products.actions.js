import { productsActions } from "./products.slice";

export const toggle = (id) => {
  return async (dispatch) => {
    dispatch(productsActions.toggle(id))
  }
}