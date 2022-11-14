import React, { Fragment } from "react";
import classes from "./Header.module.css";
import tastyImages from "../../assets/buffet.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Meals Page</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={tastyImages} alt='Tasty Buffet.'/>
        </div>
    </Fragment>
  );
};

export default Header;
