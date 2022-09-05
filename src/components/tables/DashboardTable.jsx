import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {getFlats, getPayments, getRents} from "../../services/flatServices";


const DashboardTable = ({flat}) => {
    const [flats, setFlats] = useState(getFlats());
    const [payments, setPayment] = useState(getPayments());
    const [rents, setRents] = useState(getRents());


    // useEffect(() => {
    //     setPayment(payments => payments.filter(payment => payment.flatId === parseInt(params.flatId)))
    //     setRents(rents => rents.filter(rent => rent.flatId === parseInt(params.flatId)))
    //     setFlats(flats => flats.filter(flat => flat.id === parseInt(params.flatId)))
    // }, [])
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
                    <tr>
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
