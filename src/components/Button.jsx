import React from "react";
import '../style-sheets/Button.css';

function Button(props) {

  const isOperator = valor =>{
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

    return (
        <div className= { `button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd() }>
          {props.children}
        </div>
    );
}

export default Button;