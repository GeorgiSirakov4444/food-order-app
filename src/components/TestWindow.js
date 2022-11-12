import React from "react";
import classes from './Test.module.css';
import Card from './UI/Card';

const Test = props => {

    return (
        <Card>
            <h1>Message And Button</h1>
            <button onClick={props.onHide}>{props.name}</button>
        </Card>
    );
};

export default Test;