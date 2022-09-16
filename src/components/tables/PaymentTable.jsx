import React from "react";

const PaymentTable = ({payments, name}) => {
    return (
        <table className="table table-bordered mt-3">
            <thead className="table-primary" align="center">
            <tr>
                <td className="fw-bold">Date</td>
                <td className="fw-bold">Name</td>
                <td className="fw-bold">Amount Paid</td>
            </tr>
            </thead>
            <tbody align="center">
            {payments.map(payment =>
                <tr key={payment.id}>
                    <td>{payment.date}</td>
                    <td>{payment.name}</td>
                    <td>{payment.amount}</td>
                </tr>)}
            </tbody>
        </table>
    );
};

export default PaymentTable;
