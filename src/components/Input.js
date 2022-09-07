import React from "react";

const Input = ({onTextChange, label, type, id, disabled}) => {

    return (
        <div>
            <label htmlFor={label} style={{fontSize: "14px", marginBottom: "5px", color: "grey"}}>
                {label}:
            </label>
            <input
                style={{width: "100%", height: "40px", paddingLeft: "10px"}}
                id={id??label}
                type={type??"text"}
                placeholder={label}
                onChange={onTextChange}
                disabled={disabled??false}
            />
        </div>
    )
}
export default Input;