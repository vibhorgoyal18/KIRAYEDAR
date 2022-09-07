import React, {useState} from "react";
import Input from "./Input";
import Button from "./Button";
import DisabledInput from "./DisabledInput";

export default function AddRent() {
    const [rent, setRent] = useState({
        flatId: "",
        date: "",
        amount: "",
        name: ""
    })

    const handleInputChange = (event) => {
        setRent(payment => ({...payment, [event.target.id]: event.target.value}))
    }
    const addRent = () => {
    };
    return (<div className="container pb-3">
            <div className="row mt-2">
                <div className="col-6">
                    <Input label="Rent" onTextChange={handleInputChange} id="rent" type="number"/>
                </div>
                <div className="col-6">
                    <Input label="Start units" onTextChange={handleInputChange} id="startUnits" type="number"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <Input label="End units" onTextChange={handleInputChange} id="endUnits" type="number"/>
                </div>
                <div className="col-6">
                    <Input label="Total units" onTextChange={handleInputChange} id="totalUnits" type="number"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <DisabledInput value={200} label="Electricity Bill"/>
                </div>
                <div className="col-6">
                    <Input label="Total" onTextChange={handleInputChange} id="total" type="number"/>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Button name="Add" onClick={addRent}/>
                </div>
            </div>
        </div>
    )
}