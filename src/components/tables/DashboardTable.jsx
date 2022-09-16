import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {getFlats, getPayments, getRents} from "../../services/flatServices";


const DashboardTable = ({flat}) => {
    const [flats, setFlats] = useState([]);
    const [payments, setPayment] = useState([]);
    const [rents, setRents] = useState([]);



    useEffect(() => {
        getFlats().then(dbFlats => {
            setFlats(dbFlats)
        })
    }, [])
    return (
        <table className="table table-bordered mt-3">
            <thead className="table-primary">
            <tr>
                <td className="fw-bold">Flat</td>
                <td className="fw-bold">Dues</td>
            </tr>
            </thead>
            <tbody>
            {
                flats.map(flat => (
                    <tr key={flat.id}>
                        <td>
                            <NavLink to={`/transactions/${flat.id}`} style={{textDecoration: "none"}}>
                                {flat.flatName}
                            </NavLink>
                        </td>
                        <td>Rs. 2000</td>
                    </tr>
                ))
            }

            </tbody>
        </table>
    )
};

export default DashboardTable;
