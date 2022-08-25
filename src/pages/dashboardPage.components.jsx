import React from "react";
import Table from "../components/tables/Dashboardtable.components";
import { Link } from "react-router-dom"; 

const Dashboard = (props) => {
  const flat = props.FlatDetails;
  let Tdue = 0;
  for (const flats of flat) {
    Tdue = flats.RentDue + Tdue;
  }
  return (
    <>
      <div className="container fluid mt-4">
        <div className="row">
          <div className="col-4">
            <div
              className="card mt-5 "
              style={{
                width: "80%",
                height: "30vh",
                position: "relative",
                top: "10px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "90px",
                  fontSize: "18px",
                }}
              >
                Rent Per Month
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "90px",
                  fontSize: "22px",
                }}
              >
                Rs.5000/-
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "100px",
                  left: "90px",
                  fontSize: "18px",
                }}
              >
                Total Dues
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "130px",
                  left: "90px",
                  fontSize: "22px",
                }}
              >
                Rs.{Tdue}/-
              </span>
            </div>
          </div>
          <div className="col-8">
            <table
              className="table table-bordered table-hover"
              style={{
                width: "50%",
                position: "absolute",
                left: "35%",
              }}
            >
              <thead className="table-primary">
                <tr style={{ textAlign: "center", fontSize: "20px" }}>
                  <th style={{ width: "50%" }}>Flats</th>
                  <th style={{ width: "50%" }}>Dues</th>
                </tr>
              </thead>
              <Table  flat={flat[0]}></Table>
              <Table flat={flat[1]}></Table>
              <Table flat={flat[2]}></Table>
            </table>
          </div>
        </div>
        <Link to="/addflat">
          {" "}
          <span style={{ position: "relative", left: "95%", bottom: "60px" }}>
            <button type="submit" className="btn btn-primary  mt-4">
              ADD FLAT
            </button>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
