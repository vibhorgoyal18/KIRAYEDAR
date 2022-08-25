import React from "react";

const FlatDetailsTable = ({ entries }) => {
  return (
      <table className="table mt-3 table-bordered">
          <thead className="table-primary" align="center">
          <tr>
              <td className="fw-bold">Flat Name</td>
              <td className="fw-bold">Address</td>
              <td className="fw-bold">Contact</td>
              <td className="fw-bold">Total Rent</td>
              <td className="fw-bold">Dues</td>
              <td className="fw-bold">Electricity Consumed</td>
              <td className="fw-bold">Security</td>
              <td className="fw-bold">Shifted On</td>
          </tr>
          </thead>
          <tbody align="center">
          <tr>
              <td>Noida 132</td>
              <td>Noida</td>
              <td>0987654321</td>
              <td>Rs 4000</td>
              <td>Rs 2000</td>
              <td>234</td>
              <td>Rs 8000</td>
              <td>20-08-2022</td>
          </tr>
          </tbody>
      </table>
  );
};

export default FlatDetailsTable;
