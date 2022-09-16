import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import DashboardTable from "../components/tables/DashboardTable";
import Button from "../components/Button";
import AddPayment from "../components/AddPayment";
import Modal from "../components/tables/Modal";
import AddFlat from "../components/AddFlat";

const DashboardPage = (props) => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="container" style={{marginLeft: "50px"}}>
            <div className="border mt-3 p-3" style={{width: "300px"}}>
                <div>
                    <FontAwesomeIcon icon={faMoneyBill} className="me-3 text-success" style={{fontSize: "20px"}}/>
                    <span style={{fontSize: "20px"}}>Rent per month</span>
                </div>
                <div className="mt-2 ms-5" style={{fontSize: "30px", fontWeight: "bold"}}>Rs.25000</div>
                <div>
                    <FontAwesomeIcon icon={faMoneyBill} className="me-3 text-success" style={{fontSize: "20px"}}/>
                    <span style={{fontSize: "20px"}}>Total Dues</span>
                </div>
                <div className="mt-2 ms-5" style={{fontSize: "30px", fontWeight: "bold", color: "red"}}>Rs.8000</div>
            </div>
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Button onClick={()=> setShowForm(true)} name="+ Add Flat"/>
                    <Modal
                        header="Add Flat"
                        modalVisibility={showForm}
                        hideModal={() => setShowForm(false)}>
                        <AddFlat hideModal={() => setShowForm(false)}/>
                    </Modal>
                </div>
                <div className="col-12">
                    <DashboardTable/>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
