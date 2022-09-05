import React from "react";
import {NavLink} from "react-router-dom";

export default function DashboardTableRow({flat}) {
    return (<tr>
            <td>
                <NavLink to={`/transactions/${flat.id}`} style={{textDecoration: "none"}}>Noida 132</NavLink>
            </td>
            <td>Rs. 2000</td>
        </tr>)
}