import React from 'react';
import qualityGuarantee from '../../../images/phone repair guarantee.jpg';
import corporateServices from '../../../images/corporate services.jpg';
import customerService from '../../../images/customer service.jpg'

const ChooseUs = () => {
    return (
        <section className="container mt-5">
            <h3 className="text-center mb-5">WHY CHOOSE US</h3>
            <div className="row d-flex flex-row align-items-center">
                <div className="col-md-6">
                    <img className="d-none d-md-block" style={{ width: '100%', height: '100%' }} src={qualityGuarantee} alt="" />
                </div>
                <div className="col-md-6">
                    <h5>QUALITY GUARANTEE</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, qui et tempore perspiciatis possimus nesciunt minus eius quasi eligendi cupiditate.</p>
                </div>
            </div>
            <div className="row d-flex flex-row align-items-center">
                <div className="col-md-6">
                    <h5>CORPORATE SERVICES</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, qui et tempore perspiciatis possimus nesciunt minus eius quasi eligendi cupiditate.</p>
                </div>

                <div className="col-md-6">
                    <img className="d-none d-md-block" style={{ width: '100%', height: '100%' }} src={corporateServices} alt="" />
                </div>
            </div>
            <div className="row d-flex flex-row align-items-center">
                <div className="col-md-6">
                    <img className="d-none d-md-block" style={{ width: '100%', height: '100%' }} src={customerService} alt="" />
                </div>
                <div className="col-md-6">
                    <h5>CUSTOMER SERVICE</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, qui et tempore perspiciatis possimus nesciunt minus eius quasi eligendi cupiditate.</p>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;