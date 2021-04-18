import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const formData = {
            name: data.name,
            description: data.description,
        };
        const url = `https://glacial-beyond-13888.herokuapp.com/addAReview`;

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
                    alert('Review added successfully')
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
                    <h3>Review</h3>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" ref={register} className="form-control" placeholder="Your Name" />
                        <br />
                        <textarea name="description" ref={register} rows="3" className="form-control" placeholder="Description"></textarea>
                        <br />
                        <input className="btn btn-success" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddReview;