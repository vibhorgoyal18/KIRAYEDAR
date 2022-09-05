import React from "react";
import "./modal.css";
import Button from "./Button";

export function Modal({header, onButtonClick, show, children}) {
    const modalVisibility = {
        visibility: show ? "visible" : "hidden"
    }
    return (<>
        <div id="dialog-container" style={modalVisibility}>
            <div id="dialog">
                <div className="card">
                    <div className="card-header">{header ?? ""}</div>
                    <div className="card-body">{children ?? ""}</div>
                    <div className="card-footer">
                        <Button name="Close" onClick={onButtonClick}></Button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}