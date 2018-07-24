import React from 'react';
import ReactDOM from 'react-dom';

const popups = [];

function handleHide(e){
    e.preventDefault();
    const node = ReactDOM.findDOMNode(e.currentTarget);
    ReactDOM.unmountComponentAtNode(node);
}

export const PopupInfo = props => (
    <div className="popup" type="info" onClick={handleHide}>
        <p>{props.message}</p>
    </div>
);


export default (props = {type: 'default'}) => {
    switch(props){
        case 'info':

        break;
        default:
    }
}