import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';
import Footer from '../Shared/Footer/Footer';
import Name from '../Shared/Navbar/Name/Name';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <div className='hidden md:block'>
                <Name></Name>
            </div>
            <TopBanner></TopBanner>
            <About></About>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;