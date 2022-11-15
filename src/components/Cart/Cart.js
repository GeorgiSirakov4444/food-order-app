import React, {} from 'react';
import classes from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = props => {

    const cartItems = <ul className={classes['cart-items']}>
        {[{
            id: 'c1',
            name: 'pushi',
            amount: 4,
            price: 3.99
        }].map((item) => <li key='1'>{item.name}</li>)}
    </ul>

    return (
        <Modal onHideCart7={props.onHideCart7}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.64</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart7}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;





