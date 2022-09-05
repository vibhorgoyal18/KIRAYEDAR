import React from "react";

const Button = ({name, onClick}) => {
    return (
        <button
            type="submit"
            className="btn bg-theme-color text-white mt-4"
            style={{width: "200px"}}
            onClick={onClick}
        >
            {name}
        </button>
    )
}

export default Button;