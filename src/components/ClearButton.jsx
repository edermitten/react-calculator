import React from "react";
import '../style-sheets/ClearButton.css'

const ClearButton = (props) => (
    <div className='clear-button' 
    onClick={props.clearHandler}>
        {props.children}
    </div>
);

export default ClearButton;