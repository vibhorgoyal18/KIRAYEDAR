import React from "react";

const DisabledInput = ({label, value}) => {

    return (
        <div>
            <label htmlFor={label} style={{fontSize: "20px", marginBottom: "5px"}}>
                {label}:
            </label>
            <input
                style={{width: "100%", height: "40px", paddingLeft: "10px"}}
                id={label}
                type="text"
                value={value}
                disabled={true}
            />
        </div>
    )
}
export default DisabledInput;