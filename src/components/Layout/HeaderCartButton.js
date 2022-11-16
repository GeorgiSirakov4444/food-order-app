import React from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClickShow}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;