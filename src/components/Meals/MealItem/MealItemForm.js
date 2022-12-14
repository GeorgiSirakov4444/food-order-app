import React, {useRef, useState} from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = props => {
    const [valid, setValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if( enteredAmount.trim().lenght === 0 || enteredAmountNum > 5 || enteredAmountNum < 1){
            setValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNum);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
            ref={amountInputRef} 
            label='Add amount:' 
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+Add</button>
            {!valid && <p>Enter a valid number!</p>}
        </form>
    );
};

export default MealItemForm;