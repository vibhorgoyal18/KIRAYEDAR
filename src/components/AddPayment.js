import React, {useState} from "react";
import Input from "./Input";
import Button from "./Button";
import {addPaymentToFirebase} from "../services/flatServices";

export default function AddPayment({flatId, hideModal}) {
    const [payment, setPayment] = useState({
        flatId: flatId,
        date: "",
        amount: "",
        name: ""
    })

    const handleInputChange = (event) => {
        setPayment(payment => ({...payment, [event.target.id]: event.target.value}))
    }
    const addPayment = () => {
        console.log(payment)
        addPaymentToFirebase(payment).then(()=>{
            alert("Payment added successfully!!")
            hideModal();
        })
    };
    return (
        <div className="container pb-3">
            <div className="row">
                <div className="col-12">
                    <Input label="Date" onTextChange={handleInputChange} id="date"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <Input label="Name" onTextChange={handleInputChange} id="name"/>
                </div>
                <div className="col-6">
                    <Input label="Amount" onTextChange={handleInputChange} id="amount" type="number"/>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Button name="Add" onClick={addPayment}/>
                </div>
            </div>
        </div>
    )
}