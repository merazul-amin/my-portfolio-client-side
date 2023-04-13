import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();
    return (
        <div className='text-white'>
            <h1 className='text-center text-4xl font-bold mt-5'>Project Name:- <span className='text-rose-500'>{project?.projectName}</span></h1>
            <div className='w-[90%] mx-auto'>
                <h1 className='text-3xl'>Some Screenshots:-</h1>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className=' w-[90%] mx-auto '>
                <a target={`_blank`} href={project.liveSite}><h1 className='mt-6 p-1 inline-block border-4 border-purple-400 rounded-lg hover:border-purple-600'>Live Site</h1> </a><br />
                <h1 className='mt-6 text-xl font-bold'>Technology Used:-</h1>
                <div className='flex justify-around flex-wrap mt-5 lg:w-[70%]'>
                    {project?.technologies.map((technology, index) => <p className='p-3 px-5 m-2 rounded-full bg-indigo-500 text-white' key={index}>{technology}</p>)}
                </div>

                <div className='my-7'>
                    <h1 className='text-3xl mb-4'>Website Features:</h1>
                    <div>
                        {
                            project.details.map((detail, index) => <li key={index}>{detail}</li>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;