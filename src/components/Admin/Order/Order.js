import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleOrder = () => {
        const orderDetails = { ...loggedInUser, service, orderTime: new Date() };

        fetch('https://glacial-beyond-13888.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully')
                }
            })
    }

    useEffect(() => {
        fetch('https://glacial-beyond-13888.herokuapp.com/service/' + id)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id])

    return (
        <section className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="shadow rounded p-5 bg-white">
                    <h1>Order</h1>
                    <br />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Owner</th>
                                <th scope="col">Email</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>{service.name}</strong></td>
                                <td><strong>{loggedInUser.displayName}</strong></td>
                                <td><strong>{loggedInUser.email}</strong></td>
                                <td><strong>$ {service.price}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div className="m-5">
                    <ProcessPayment></ProcessPayment>
                </div>
                <div className="text-center">
                    <input onClick={handleOrder} className="btn btn-success" type="submit" value="Order" />
                </div>
            </div>
        </section>
    );
};

export default Order;