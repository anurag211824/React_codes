import React, { createContext, useState } from 'react';

// Create a context for Cart
const CartContext = createContext();

// CartContextProvider component to manage cart state
const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Function to remove a product from the cart based on id
    const removeFromCart = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    // Return the provider with the context value and children components
    return (
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
