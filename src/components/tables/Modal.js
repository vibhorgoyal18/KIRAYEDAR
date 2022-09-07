import React, {useState} from "react";
import RentTable from "./RentTable";

const Modal = ({header, modalVisibility, hideModal, children}) => {
    return (
        <div id="dialog-container" className="d-flex justify-content-center align-items-center"
             style={{visibility: modalVisibility ? "visible" : "hidden"}}>
            <div id="dialog" className="ps-2 pe-2 text-start">
                <div className="row mt-2">
                    <div className="col-auto">
                        <h3 className="text-theme-color">{header}</h3>
                    </div>
                    <div className="col align-self-start text-end me-2">
                        <span
                        className="cross"
                            style={{fontSize: "20px", cursor: "pointer"}}
                            onClick={hideModal}>
                            X
                        </span>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;