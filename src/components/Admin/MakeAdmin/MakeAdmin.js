import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const formData = {
            email: data.email
        };
        const url = `https://glacial-beyond-13888.herokuapp.com/addAnAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin added successfully')
                }
            })
    };

    return (
        <section className="row">
            <div className="col-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div>
                    <h3>Make Admin</h3>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="email" ref={register} className="form-control" />
                        <br />
                        <input className="btn btn-success" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;