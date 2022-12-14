import React, {useContext, useState} from 'react';
import Modal from "../UI/Modal";
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmittng] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const modalActions = 
    (<div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart7}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>);
    
    const submitOrderHandler = async (userData) => {
        setIsSubmittng(true);
        await fetch('https://food-app-44677-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmittng(false);
        setDidSubmit(true);
        cartCtx.clearCart();
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

    const cartModalContent = <React.Fragment>
        {cartItems}
            <div className={classes.total}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart7}/>}
            {!isCheckout && modalActions}
    </React.Fragment>

    const isSubmittitnModal = <p>Sending order data...</p>
    const didSubmitOk = <p>Success !</p>

    return (
        <Modal onHideCart7={props.onHideCart7}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittitnModal}
            {!isSubmitting && didSubmit && didSubmitOk}
        </Modal>
    );
};

export default Cart;






