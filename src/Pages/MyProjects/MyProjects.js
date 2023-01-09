import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import Slider from "react-slick";
import './Slick.css';
import { RotatingLines } from 'react-loader-spinner'

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const [projectsLoading, setProjectsLoading] = useState(false);
    useEffect(() => {
        setProjectsLoading(true);
        fetch('https://my-portfolio-phi-rosy.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setProjectsLoading(false);
            })
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
                    <h1 className='text-white text-6xl text-center font-extrabold lg:mx-5'>Projects <span className='text-green-400 inline-block mt-5 lg:mt-0'>I Did</span></h1>
                    <p className='text-white text-center mt-5'>Have a look in my projects which I recently did.</p>
                </div>

                {/* Right Line */}
                <div className='border-4 mt-7 w-[250px] h-0'>

                </div>
            </div>
            <div className='w-[85%] sm:w-1/2 mx-auto'>
                {
                    projectsLoading ?
                        <div className='w-[20%] mx-auto'>
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="3"
                                animationDuration="0.75"
                                width="100"
                                visible={true}
                            />
                        </div>
                        :
                        <Slider {...settings}>
                            {
                                projects.map((project, i) => <SingleProject project={project} key={i}></SingleProject>)
                            }
                        </Slider>
                }


            </div>
        </div>
    );
};

export default MyProjects;