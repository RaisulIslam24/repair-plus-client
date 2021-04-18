import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [orders, setOrders] = useState([]);
    const [services, setServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://glacial-beyond-13888.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const deleteService = id => {
        fetch(`https://glacial-beyond-13888.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            const remainServices = services.filter(service => service._id !== result)
            setServices(remainServices)
            alert('Service have been deleted successfully')
        })
    }

    return (
        <section className="row">
            <div className="col-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order =>
                            <tbody>
                                <tr>
                                    <td>{order.name}</td>
                                    <td><img style={{width: '80px'}} src={order.img} alt=""/></td>
                                    <td>$ {order.price}</td>
                                    <td><button onClick={() => deleteService(order._id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        </section>
    );
};

export default ManageServices;