import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('https://glacial-beyond-13888.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    return (
        <div>
            <section className="container mt-5 mb-5">
                <div className="text-center">
                    <h3>TESTIMONIALS</h3>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row mt-5">
                        {
                            testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;