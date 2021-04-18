import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WeRepair from '../WeRepair/WeRepair';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WeRepair></WeRepair>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;