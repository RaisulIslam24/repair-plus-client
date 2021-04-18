import React from 'react';
import { useHistory } from 'react-router';

const ServiceDetail = ({service}) => {
    const {_id} = service;
    const history = useHistory()

    const handleService = (id) => {
        history.push(`/order/${id}`)
    }

    return (
        <div onClick={() => handleService(_id)} className="col-md-4 col-sm-6 border rounded shadow text-center">
            <img className="img-fluid" src={service.img} alt=""/>
            <h5 className="mt-3 mb-3">{service.name}</h5>      
        </div>
    );
};

export default ServiceDetail;