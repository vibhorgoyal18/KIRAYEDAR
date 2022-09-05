import React from "react";

const PaymentTable = ({payments}) => {
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
          <tr>
              <td>22-7-2022</td>
              <td>Rajesh</td>
              <td>Rs. 2000</td>
          </tr>
          <tr>
              <td>22-7-2022</td>
              <td>Rajesh</td>
              <td>Rs. 2000</td>
          </tr>
          <tr>
              <td>22-7-2022</td>
              <td>Rajesh</td>
              <td>Rs. 2000</td>
          </tr>
          </tbody>
      </table>
  );
};

export default PaymentTable;
