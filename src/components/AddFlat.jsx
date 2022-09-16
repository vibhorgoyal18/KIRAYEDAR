import React, {useState} from "react";
import {Link} from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import DisabledInput from "./DisabledInput";
import {addFlatToFirebase} from "../services/flatServices";

const AddFlat = ({hideModal}) => {
    const [flat, setFlat] = useState({})
    const handleInputChange = (event) => {
        setFlat(flat => ({...flat, [event.target.id]: event.target.value}))
    }

    const addFlat = () => {
        addFlatToFirebase(flat).then(() => {
            alert("Flat added successfully!!")
            hideModal();
            setFlat({});
        });
    }
    return (
        <div className="container pb-3">
            <div className="row mt-2">
                <div className="col-12">
                    <Input label="Flat Name" onTextChange={handleInputChange} id="flatName"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <Input label="First Name" onTextChange={handleInputChange} id="firstName"/>
                </div>
                <div className="col-6">
                    <Input label="Last Name" onTextChange={handleInputChange} id="lastName"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <Input label="Ph. No" onTextChange={handleInputChange} id="tenantContact"/>
                </div>
                <div className="col-6">
                    <Input label="Rent per month" onTextChange={handleInputChange} id="rent" type="number"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <Input label="Electricity Start Units" onTextChange={handleInputChange} id="startUnits"
                           type="number"/>
                </div>
                <div className="col-6">
                    <Input label="Rs. per unit" onTextChange={handleInputChange} id="perUnitCharge" type="number"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <Input label="Security Money" onTextChange={handleInputChange} id="security" type="number"/>
                </div>
                <div className="col-6">
                    <Input label="Start Date" onTextChange={handleInputChange} id="startDate"/>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Button name="Add" onClick={addFlat}/>
                </div>
            </div>
        </div>
    );
};

export default AddFlat;
