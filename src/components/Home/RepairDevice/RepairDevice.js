import React from 'react';
import './RepairDevice.css'

const RepairDevice = ({ device }) => {
    return (
        <section className="container">
            <div className="row p-3">
                <div className="col-md-3">
                    {device.icon}
                </div>
                <div className="col-md-9">
                    <h5>{device.name}</h5>
                    <p>{device.description}</p>
                </div>
            </div>
        </section>
    );
};

export default RepairDevice;