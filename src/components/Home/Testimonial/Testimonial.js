import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonial.css'

const Testimonial = ({ testimonial }) => {
    return (
        <div className="col-md-4 col-sm-6 p-4 border rounded shadow">
            <h5 className="text-center mb-3">{testimonial.name}</h5>
            <p className="align-justify">{testimonial.description}</p>
            <FontAwesomeIcon className="icon" icon={faStar}/>
            <FontAwesomeIcon className="icon" icon={faStar}/>
            <FontAwesomeIcon className="icon" icon={faStar}/>
            <FontAwesomeIcon className="icon" icon={faStar}/>
            <FontAwesomeIcon className="icon" icon={faStar}/>
        </div>
    );
};

export default Testimonial;