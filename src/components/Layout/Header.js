import { Fragment } from "react";
import healthyMeal from '../../assets/buffet.jpeg';
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Food App</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={healthyMeal} alt='Table with healthy foods!'/>
        </div>
    </Fragment>
};

export default Header;