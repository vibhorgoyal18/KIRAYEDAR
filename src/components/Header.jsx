import React from "react";
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default function HeaderComponent() {
  return (
      <nav className="navbar navbar-light bg-theme-color">
          <div className="container-fluid">
              <NavLink to="/dashboard" className="navbar-brand" style={{color: "white"}}>
                  <FontAwesomeIcon icon={faHome} size="2x"/>
                  <span className="ms-2 text-capitalize" style={{height: "100%",fontSize: "30px"}}>Kirayedar</span>
              </NavLink>
          </div>
      </nav>
  );
}
