import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';
import Footer from '../Shared/Footer/Footer';
import WelcomeSlider from '../Shared/Navbar/WelcomSlider/WelcomeSlider';
import Skills from '../Skills/Skills';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <div className='hidden md:block'>
                <WelcomeSlider></WelcomeSlider>
            </div>
            <TopBanner></TopBanner>
            <About></About>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;