import React, { createContext, useContext, useReducer } from "react";
import cartReducer from "./Reducer";

// Create a context for the cart
const CartContext = createContext();

// Define a custom provider component
const ContextProvider = (props) => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      additionalImages: ["url-to-image1", "url-to-image2"],
      reviews: ["Great product!", "Loved it!"],
    },
    {
      id: 2,
      title: "Black and White Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      additionalImages: ["url-to-image1", "url-to-image2"],
      reviews: ["Great product!", "Loved it!"],
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      additionalImages: ["url-to-image1", "url-to-image2"],
      reviews: ["Great product!", "Loved it!"],
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      additionalImages: ["url-to-image1", "url-to-image2"],
      reviews: ["Great product!", "Loved it!"],
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    productsArr: productsArr,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

// Create a custom hook to access the context value
const useCartContext = () => {
  return useContext(CartContext);
};

export { ContextProvider, useCartContext };
