import React from 'react';

const SingleProject = ({ project }) => {
    console.log(project);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-[300px] w-full' src={project.thumbnail} alt="/" /></figure>
            <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;