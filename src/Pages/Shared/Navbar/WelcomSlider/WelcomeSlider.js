import React from 'react';
import './WelcomeSlider.css';
const WelcomeSlider = () => {
    return (
        <div className="wrapper">
            <marquee behavior="scroll" scrollamount="10" className='text-4xl font-bold text-white' direction="left">
                Welcome in my Portfolio
            </marquee>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
            <div><span className="dot"></span></div>
        </div>
    );
};

export default WelcomeSlider;