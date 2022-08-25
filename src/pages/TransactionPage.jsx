import React from "react";
import FlatDetailsTable from "../components/tables/FlatDetailsTable";
import PaymentTable from "../components/tables/PaymentTable";
import RentTable from "../components/tables/RentTable";

const TransactionPage = (props) => {
    const Entries = props.Entries;
    const Payments = props.Payments;
    return (
        <div className="container" style={{marginLeft: "50px"}}>
            <div className="row justify-content-end">
                <div className="col-12">
                    <FlatDetailsTable/>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-auto">
                    <button
                        className="btn bg-theme-color text-white mt-4"
                        style={{width: "200px"}}
                    >
                        + Add Payment
                    </button>
                </div>
                <div className="col-12">
                    <PaymentTable/>
                </div>
                <div className="col-auto">
                    <button
                        className="btn bg-theme-color text-white mt-4"
                        style={{width: "200px"}}
                        data-toggle="modal" data-target="#exampleModalLong"
                    >
                        + Add Rent
                    </button>
                </div>
                <div className="col-12">
                    <RentTable/>
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;
