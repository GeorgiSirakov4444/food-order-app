import React, {useContext} from 'react';
import Modal from "../UI/Modal";
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartAddHandler = item => {

    };

    const cartRemoveHandler = id => {

    };

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
            <CartItem 
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartRemoveHandler.bind(null, item.id)}
                onAdd={cartAddHandler.bind(null, item)}
                />
        ))}
    </ul>

    return (
        <Modal onHideCart7={props.onHideCart7}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart7}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;






