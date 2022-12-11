import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();
    console.log(project);
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-5'>Project Name:- <span className='text-rose-500'>{project?.projectName}</span></h1>
            <div className='w-[90%] mx-auto'>
                <h1 className='text-3xl'>Some Screenshots:-</h1>
            </div>
            <div className=' w-[90%] mx-auto '>
                <h1 className='mt-6 p-3 w-[20%] text-center border-4 border-green-400 rounded-lg '>Technology Used:-</h1>
                <div className='flex justify-betweenflex-wrap'>
                    {project?.technologies.map(technology => <p className='p-3 px-5 m-2 rounded-full bg-indigo-500 text-white'>{technology}</p>)}
                </div>

                <div className='mt-7'>
                    <h1 className='text-3xl'>Website Features:</h1>
                    <div>
                        {
                            project.details.map(detail => <li>{detail}</li>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;