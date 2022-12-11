import React from 'react';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';
import Footer from '../Shared/Footer/Footer';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;