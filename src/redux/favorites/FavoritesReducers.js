const initialState = { products: [] };

export function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
