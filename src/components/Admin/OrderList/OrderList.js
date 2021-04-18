import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://glacial-beyond-13888.herokuapp.com/ordersByEmail?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <section className="row">
            <div className="col-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Service Owner</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Order Time</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order =>
                            <tbody>
                                <tr>
                                    <td>{order.displayName}</td>
                                    <td>{order.service.name}</td>
                                    <td>{(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</td>
                                    <td>$ {order.service.price}</td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        </section>
    );
};

export default OrderList;