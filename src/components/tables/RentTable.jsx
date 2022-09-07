import React from "react";

const RentTable = ({rentData, flatData}) => {
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
            {rentData.map(rent => <tr key={rent.id}>
                <td>{rent.date}</td>
                <td>{flatData.flatName}</td>
                <td>{flatData.rent}</td>
                <td>{rent.endUnit - rent.startUnit}</td>
                <td>{(rent.endUnit - rent.startUnit) * flatData.pricePerUnit}</td>
                <td>{flatData.rent + ((rent.endUnit - rent.startUnit) * flatData.pricePerUnit)}</td>
            </tr>)}
            </tbody>
        </table>
    );
};

export default RentTable;
