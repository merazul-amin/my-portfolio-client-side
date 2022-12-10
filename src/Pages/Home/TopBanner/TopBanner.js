import React from 'react';

const TopBanner = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-[50%]'>
                        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-[50%]'>
                        <h1 className="text-4xl font-bold">Hi, I am Md Merazul <span> Amin.</span></h1>
                        <h1 className=''>Junior Mern Stack Web Developer</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Download My Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;