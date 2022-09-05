import React from "react";

const FlatDetailsTable = ({ flatDetails }) => {
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
              <td>{flatDetails?.flatName??""}</td>
              <td>{flatDetails?.address??""}</td>
              <td>{flatDetails?.tenantPhone??""}</td>
              <td>{flatDetails?.rent??""}</td>
              <td>{flatDetails?.dues??"3000"}</td>
              <td>{flatDetails?.electricityConsumed??"134"}</td>
              <td>{flatDetails?.security??""}</td>
              <td>{flatDetails?.startDate??""}</td>
          </tr>
          </tbody>
      </table>
  );
};

export default FlatDetailsTable;
