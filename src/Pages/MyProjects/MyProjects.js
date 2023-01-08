import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import Slider from "react-slick";
import './Slick.css';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://my-portfolio-phi-rosy.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='my-10'>
            {/* Top About Text */}
            <div className='flex justify-center my-10'>
                {/* left Line */}
                <div className='border-4 mt-7 w-[250px] h-0'>

                </div>

                {/* Text */}
                <div>
                    <h1 className='text-white text-6xl text-center font-extrabold lg:mx-5'>Projects <span className='text-green-400'>I Did</span></h1>
                    <p className='text-white text-center mt-5'>Have a look in my projects which I recently did.</p>
                </div>

                {/* Right Line */}
                <div className='border-4 mt-7 w-[250px] h-0'>

                </div>
            </div>
            <div className='w-[85%] lg:w-1/2 mx-auto'>
                <Slider {...settings}>
                    {
                        projects.map((project, i) => <SingleProject project={project} key={i}></SingleProject>)
                    }
                </Slider>
            </div>


        </div>
    );
};

export default MyProjects;