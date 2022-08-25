import { MDBTableBody } from "mdb-react-ui-kit";
import React from "react";

const RentTable = (props) => {
    return (
        <table className="table table-bordered mt-3">
            <thead className="table-primary" align="center">
            <tr>
                <td rowSpan={2} className="fw-bold">Date</td>
                <td rowSpan={2} className="fw-bold">Flat Name</td>
                <td rowSpan={2} className="fw-bold">Rent Amount</td>
                <td colSpan={2} className="fw-bold">Electricity</td>
                <td rowSpan={2} className="fw-bold">Total</td>
            </tr>
            <tr>

                <td className="fw-bold">Units</td>
                <td className="fw-bold">Price</td>
            </tr>
            </thead>
            <tbody align="center">
            <tr>
                <td>22-7-2022</td>
                <td>Noida 132</td>
                <td>Rs. 2000</td>
                <td>239</td>
                <td>Rs 20</td>
                <td>Rs 4020</td>
            </tr>
            <tr>
                <td>22-7-2022</td>
                <td>Noida 132</td>
                <td>Rs. 2000</td>
                <td>239</td>
                <td>Rs 20</td>
                <td>Rs 4020</td>
            </tr>
            <tr>
                <td>22-7-2022</td>
                <td>Noida 132</td>
                <td>Rs. 2000</td>
                <td>239</td>
                <td>Rs 20</td>
                <td>Rs 4020</td>
            </tr>
            </tbody>
        </table>
    );
};

export default RentTable;
