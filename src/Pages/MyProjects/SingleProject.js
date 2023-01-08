import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const SingleProject = ({ project }) => {
    // This is for loading state spinner
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
        setIsLoading(true);
    }
    return (
        <div className="card card-compact w-[95%]  lg:w-2/3 mx-auto bg-gray-400 bg-opacity-75">
            {/* <figure><img className='h-[300px] w-full' src={project.thumbnail} alt="/" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
                {
                    isLoading ?
                        <div className='mx-auto'>
                            <ThreeDots
                                height="70"
                                width="70"
                                radius="9"
                                color="#4fa94d"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>

                        :

                        <div className="card-actions justify-end">
                            <Link to={`/projects/${project._id}`}><button onClick={handleClick} className="btn btn-primary">Show Details</button></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default SingleProject;