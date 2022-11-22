import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveCharts = (value) => value.trim().length > 4;

const Checkout = (props) => {
  const [formsInputValidity, setFormInputValidity] = useState({
    name: null,
    street: null,
    city: null,
    postalCode: null,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPostalIsValid = isFiveCharts(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredAddressIsValid,
      city: enteredPostalIsValid,
      postalCode: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    } else {
        props.onConfirm({
            name: enteredName,
            street: enteredAddress,
            city: enteredCity,
            postalCode: enteredPostal
        });
    }
  };

  const postalControlClasses = 
    `${classes.control} ${formsInputValidity.postalCode ? '' : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formsInputValidity.name && <p>Enter a valid name.</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Address</label>
        <input type="text" id="street" ref={addressInputRef} />
        {!formsInputValidity.street && <p>Enter a valid address.</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formsInputValidity.postalCode && <p>Enter a valid code.</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formsInputValidity.city && <p>Enter a exsisting City.</p>}
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
