import React from "react";

const Input = ({onTextChange, label, type}) => {

    return (
        <div>
            <label htmlFor={label} style={{fontSize: "20px", marginBottom: "5px"}}>
                <b>{label}:</b>
            </label>
            <input
                style={{width: "100%", height: "40px", paddingLeft: "10px"}}
                id={label}
                type={type??"text"}
                placeholder={label}
                onChange={onTextChange}
            />
        </div>
    )
}
export default Input;