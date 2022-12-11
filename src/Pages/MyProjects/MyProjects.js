import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center my-6'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto'>
                {
                    projects.map((project, i) => <SingleProject project={project} key={i}></SingleProject>)
                }
            </div>

        </div>
    );
};

export default MyProjects;