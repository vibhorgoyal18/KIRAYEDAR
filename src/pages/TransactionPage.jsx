import React, {useEffect, useState} from "react";
import FlatDetailsTable from "../components/tables/FlatDetailsTable";
import PaymentTable from "../components/tables/PaymentTable";
import RentTable from "../components/tables/RentTable";
import {useParams} from "react-router-dom";
import {getFlats, getPayments, getRents} from "../services/flatServices";
import {Modal} from "../components/Modal";
import Button from "../components/Button";

const TransactionPage = (props) => {
    const params = useParams();
    const [flats, setFlats] = useState(getFlats());
    const [payments, setPayment] = useState(getPayments());
    const [rents, setRents] = useState(getRents());
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(modalState => !modalState)
    }


    useEffect(() => {
        setPayment(payments => payments.filter(payment => payment.flatId === parseInt(params.flatId)))
        setRents(rents => rents.filter(rent => rent.flatId === parseInt(params.flatId)))
        setFlats(flats => flats.filter(flat => flat.id === parseInt(params.flatId)))
    }, [])

    return (
        <div className="container" style={{marginLeft: "50px"}}>
            <div className="row justify-content-end">
                <div className="col-12">
                    <FlatDetailsTable flatDetails={flats[0]}/>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Button name="+ Payment" onClick={() => setShowModal(true)}/>
                    {/*<Modal header="Header" onButtonClick={toggleModal} show={showModal}><PaymentTable/></Modal>*/}
                </div>
                <div className="col-auto align-self-end">
                    <span className="text-theme-color">Show All</span>
                </div>
                <div className="col-12">
                    <PaymentTable/>
                </div>
                <div className="col-auto">
                    <Button name="+ Add Rent" onClick={() => setShowModal(true)}/>
                </div>
                <div className="col-auto align-self-end">
                    <span className="text-theme-color">Show All</span>
                </div>
                <div className="col-12">
                    <RentTable/>
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;
