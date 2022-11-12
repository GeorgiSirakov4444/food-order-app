import React from "react";
import classes from './Test.module.css';

const Test = props => {
    // let name2 = 'arthur';

    return (<button className={classes.button} onClick={props.onShow}>
        
        {props.name}
        
    </button>);
};

export default Test;