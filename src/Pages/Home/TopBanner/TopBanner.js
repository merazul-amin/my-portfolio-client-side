import React from 'react';
import topImg from './../../../assets/top-photo.jpg';

const TopBanner = () => {
    return (
        <div className='w-[90% mx-auto]'>
            <div className="hero bg-base-200">
                <div className="hero-content w-[90%] mx-auto flex-col lg:flex-row-reverse">
                    <div className='lg:w-[50%] mx-auto'>
                        <img src={topImg} alt='/' className=" rounded-lg shadow-2xl w-2/3" />
                    </div>
                    <div className='lg:w-[50%] mx-auto'>
                        <h1 className="text-4xl font-bold">Hi, I am Md <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'> Merazul Amin.</span></h1>
                        <h1 className=''>Junior Mern Stack Web Developer</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <a href='https://drive.google.com/uc?id=17PLxkXPNJYjRNQAjLWbCBdotibmlCcO5&export=download'> <button className="btn btn-primary">Download My Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;