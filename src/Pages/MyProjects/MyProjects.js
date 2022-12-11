import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://my-portfolio-phi-rosy.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center mt-6 font-bold'>My Projects</h1>
            <p className='text-center mb-6'>Recently Done</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto'>
                {
                    projects.map((project, i) => <SingleProject project={project} key={i}></SingleProject>)
                }
            </div>

        </div>
    );
};

export default MyProjects;