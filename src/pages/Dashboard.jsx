import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import DashboardTable from "../components/tables/DashboardTable";

const Dashboard = (props) => {
    const flat = props.FlatDetails;
    let Tdue = 0;
    for (const flats of flat) {
        Tdue = flats.RentDue + Tdue;
    }
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
                    <button
                        className="btn bg-theme-color text-white mt-4"
                        style={{width: "200px"}}
                    >
                        + Add Flat
                    </button>
                </div>
                <div className="col-12">
                    <DashboardTable/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
