import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = ({ project }) => {
    return (
        <div className="card card-compact w-[95%]  lg:w-2/3 mx-auto bg-indigo-500">
            <figure><img className='h-[300px] w-full' src={project.thumbnail} alt="/" /></figure>
            <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/projects/${project._id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;