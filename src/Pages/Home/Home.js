import React from 'react';
import MyProjects from '../MyProjects/MyProjects';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;