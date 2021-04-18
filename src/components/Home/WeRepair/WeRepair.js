import React from 'react';
import RepairDevice from '../RepairDevice/RepairDevice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faCameraRetro, faDesktop, faTablet, faVideo, faGamepad } from '@fortawesome/free-solid-svg-icons'

const devices = [
    {
        name: "MOBILE PHONES",
        icon: <FontAwesomeIcon icon={faMobile} className="fa-3x text-danger"/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, distinctio!"
    },
    {
        name: "PHOTO CAMERAS",
        icon: <FontAwesomeIcon icon={faCameraRetro} className="fa-3x text-danger"/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, distinctio!"
    },
    {
        name: "COMPUTERS",
        icon: <FontAwesomeIcon icon={faDesktop} className="fa-3x text-danger"/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, distinctio!"
    },
    {
        name: "TABLETS",
        icon: <FontAwesomeIcon icon={faTablet} className="fa-3x text-danger"/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, distinctio!"
    },
    {
        name: "VIDEO CAMERAS",
        icon: <FontAwesomeIcon icon={faVideo} className="fa-3x text-danger"/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, distinctio!"
    },
    {
        name: "GAME CONSOLES",
        icon: <FontAwesomeIcon icon={faGamepad} className="fa-3x text-danger"/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, distinctio!"
    }
]

const WeRepair = () => {
    return (
        <section className="container mt-5">
            <h3 className="text-center">WE REPAIR</h3>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-3 mt-5">
                    {devices.map(device => <RepairDevice device={device}></RepairDevice>)}
                </div>
            </div>
        </section>
    );
};

export default WeRepair;