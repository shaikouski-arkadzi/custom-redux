import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'proucts',
  initialState: {
    products: [
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }
    ]
  },
  reducers: {
    toggle(state, action) {
      const prodIndex = state.products.findIndex(
        p => p.id === action.payload
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus
      };
      state.products = updatedProducts;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;