import React from 'react';
import header from '../../../images/header.jpg'
import header1 from '../../../images/header1.jpg'
import header2 from '../../../images/header2.jpeg'

const HeaderMain = () => {
    return (
        <div className="container">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={header} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3 style={{ color: 'black' }}>Bring your gadget back to life</h3>
                            <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor hic consequuntur deleniti voluptate aspernatur.</p>
                            <button className="btn btn-primary">SEE ALL SERVICES</button>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src={header1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3 style={{ color: 'black' }}>Quick repair from the best team</h3>
                            <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor hic consequuntur deleniti voluptate aspernatur.</p>
                            <button className="btn btn-primary">SEE ALL SERVICES</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={header2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3 style={{ color: 'black' }}>Quick service from the best team</h3>
                            <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor hic consequuntur deleniti voluptate aspernatur.</p>
                            <button className="btn btn-primary">SEE ALL SERVICES</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeaderMain;