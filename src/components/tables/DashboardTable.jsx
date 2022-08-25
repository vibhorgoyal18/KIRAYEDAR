import React from "react";
import {NavLink} from "react-router-dom";


const DashboardTable = ({flat}) => {

    return (
        <table className="table table-bordered mt-3">
            <thead className="table-primary">
            <tr>
                <td className="fw-bold">Flat</td>
                <td className="fw-bold">Dues</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><NavLink to="/transactions" style={{textDecoration: "none"}}>Noida 132</NavLink></td>
                <td>Rs. 2000</td>
            </tr>
            <tr>
                <td><NavLink to="/transactions" style={{textDecoration: "none"}}>Noida 132</NavLink></td>
                <td>Rs. 2000</td>
            </tr>
            <tr>
                <td><NavLink to="/transactions" style={{textDecoration: "none"}}>Noida 132</NavLink></td>
                <td>Rs. 2000</td>
            </tr>
            </tbody>
        </table>
    )
};

export default DashboardTable;
