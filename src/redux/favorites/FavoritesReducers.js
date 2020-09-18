const initialState = {
  products: [
    {
      id: 16,
      name: "Curs bun",
      price: 60,
      currency: "LEI",
      image: "https://i.imgur.com/Us1A2Fy.jpg",
      size: "L",
      colour: "Negru",
      material: "Piele",
      brand: "DS Damat",
      description:
        "Mănuși din piele, cu model, din colecția toamnă-iarnă 2018, DS Damat.",
    },
  ],
};

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
