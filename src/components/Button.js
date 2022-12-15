import React from "react";

import "./Button.css";

const Button = ({ infoBoton, handleOnClick }) => {
    return (
        <div class="container">
            <button
                id="btn"
                type="submit"
                class="btn btn-primary"
                onClick={() => {
                    handleOnClick();
                }}
            >{infoBoton}</button>
        </div>
    )
}
export default Button;