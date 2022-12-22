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
        <div>
            <h1 className='text-4xl text-center mt-6 font-bold'>My Projects</h1>
            <p className='text-center mb-6'>Recently Done</p>
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