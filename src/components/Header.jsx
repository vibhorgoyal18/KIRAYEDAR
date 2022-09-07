import React from "react";
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default function HeaderComponent() {
  return (
      <nav className="navbar navbar-light bg-theme-color">
          <div className="container-fluid">
              <div className="row" style={{width: "100%"}}>
                  <div className="col">
                      <NavLink to="/dashboard" className="navbar-brand" style={{color: "white"}}>
                          <FontAwesomeIcon icon={faHome} size="2x"/>
                          <span className="ms-2 text-capitalize" style={{height: "100%",fontSize: "30px"}}>Kirayedar</span>
                      </NavLink>
                  </div>
                  <div className="col-auto d-flex justify-content-center align-items-center">
                      <span className="sign-out">Sign Out</span>
                  </div>
              </div>

          </div>
      </nav>
  );
}
