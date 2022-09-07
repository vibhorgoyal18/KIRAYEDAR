import React, {useEffect, useState} from "react";
import FlatDetailsTable from "../components/tables/FlatDetailsTable";
import PaymentTable from "../components/tables/PaymentTable";
import RentTable from "../components/tables/RentTable";
import {useParams} from "react-router-dom";
import {getFlats, getPayments, getRents} from "../services/flatServices";
import Button from "../components/Button";
import Modal from "../components/tables/Modal";
import AddFlat from "../components/AddFlat";
import AddPayment from "../components/AddPayment";
import AddRent from "../components/AddRent";

const TransactionPage = (props) => {
    const params = useParams();
    const [flats, setFlats] = useState(getFlats());
    const [payments, setPayment] = useState(getPayments());
    const [rents, setRents] = useState(getRents());
    const [showPaymentHistoryModal, setShowPaymentHistoryModal] = useState(false);
    const [showRentHistoryModal, setShowRentHistoryModal] = useState(false);
    const [showAddPayment, setShowAddPayment] = useState(false);
    const [showAddRent, setShowAddRent] = useState(false);


    useEffect(() => {
        setPayment(payments => payments.filter(payment => payment.flatId === parseInt(params.flatId)))
        setRents(rents => rents.filter(rent => rent.flatId === parseInt(params.flatId)))
        setFlats(flats => flats.filter(flat => flat.id === parseInt(params.flatId)))
    }, [])

    return (<div className="container">
        <div className="row justify-content-end">
            <div className="col-12">
                <FlatDetailsTable
                    flatDetails={flats[0]}
                    electricityConsumed={rents.reduce((totalUnits, rent) => totalUnits + (rent.endUnit - rent.startUnit), 0)}
                    dues={
                        rents.reduce((totalRent, rent) => totalRent + flats[0].rent + ((rent.endUnit - rent.startUnit) * flats[0].pricePerUnit), 0) -
                        payments.reduce((totalPayment, payment) => totalPayment + payment.amount, 0)

                    }
                />
            </div>
        </div>
        <div className="row justify-content-end">
            <div className="col d-flex align-items-end">
                <span className="text-theme-color" style={{fontSize: "30px"}}>Payment History</span>
            </div>
            <div className="col-auto">
                <Button name="+ Payment" onClick={() => setShowAddPayment(true)}/>
                <Modal
                    header="Add Payment"
                    modalVisibility={showAddPayment}
                    hideModal={() => setShowAddPayment(false)}>
                    <AddPayment/>
                </Modal>
            </div>
            <div className="col-auto align-self-end">
                <span className="text-theme-color link" onClick={() => setShowPaymentHistoryModal(true)}>Show All</span>
                <Modal
                    header="Payment History"
                    modalVisibility={showPaymentHistoryModal}
                    hideModal={() => setShowPaymentHistoryModal(false)}>
                    <PaymentTable payments={payments} name={flats[0].tenantName}/>
                </Modal>
            </div>
            <div className="col-12">
                <PaymentTable payments={payments.slice(0, 3)} name={flats[0].tenantName}/>
            </div>
            <div className="col d-flex align-items-end">
                <span className="text-theme-color" style={{fontSize: "30px"}}>Rent History</span>
            </div>
            <div className="col-auto">
                <Button name="+ Add Rent" onClick={() => setShowAddRent(true)}/>
                <Modal
                    header="Add Rent"
                    modalVisibility={showAddRent}
                    hideModal={() => setShowAddRent(false)}>
                    <AddRent/>
                </Modal>
            </div>
            <div className="col-auto align-self-end">
                <span className="text-theme-color link" onClick={() => setShowRentHistoryModal(true)}>Show All</span>
                <Modal
                    header="Rent History"
                    modalVisibility={showRentHistoryModal}
                    hideModal={() => setShowRentHistoryModal(false)}>
                    <RentTable flatData={flats[0]} rentData={rents}/>
                </Modal>
            </div>
            <div className="col-12">
                <RentTable flatData={flats[0]} rentData={rents.slice(0, 3)}/>
            </div>
        </div>
    </div>);
};

export default TransactionPage;
