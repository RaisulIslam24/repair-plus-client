import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            img: imageUrl
        };
        const url = `https://glacial-beyond-13888.herokuapp.com/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Service added successfully')
                }
            })
    };
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '5fb422405e02b3782f9ac55b36d77374');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <section className="row">
            <div className="col-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div>
                    <h3>Add a service</h3>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>Service Name</h5>
                        <input name="name" ref={register} className="form-control" />
                        <br />
                        <h5>Price</h5>
                        <input name="price" ref={register} className="form-control" />
                        <br />
                        <input type="file" onChange={handleImageUpload} />
                        <br />
                        <br />
                        <input className="btn btn-success" type="submit" value="Save" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;