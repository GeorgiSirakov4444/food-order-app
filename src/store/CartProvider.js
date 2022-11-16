import React, { useReducer } from "react";
import { useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, cartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {};
    const removeItemHandler = id => {};

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;