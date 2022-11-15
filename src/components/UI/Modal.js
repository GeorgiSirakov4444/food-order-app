import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart7}/>;
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalHelper = document.getElementById('overlays');

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart7={props.onHideCart7}/>, portalHelper)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalHelper)}
        </Fragment>
    );
};

export default Modal;
