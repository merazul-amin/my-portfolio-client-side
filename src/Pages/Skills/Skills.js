import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import js from '../../assets/skills/javascript.png';
import react from '../../assets/skills/react.png';
import node from '../../assets/skills/node.png';
import express from '../../assets/skills/express.png';
import mongodb from '../../assets/skills/mongodb.png';
import git from '../../assets/skills/git.png';
import github from '../../assets/skills/github.png';
import firebase from '../../assets/skills/firebase.png';
import redux from '../../assets/skills/redux.png';
import typescript from '../../assets/skills/typescript.png';
import nextJs from '../../assets/skills/nextJs.png';
import figma from '../../assets/skills/figma.png';
import vscode from '../../assets/skills/vscode.png';
import tailwind from '../../assets/skills/tailwind.png';
import bootstrap from '../../assets/skills/bootstrap.png';
import msoffice from '../../assets/skills/msoffice.png';
import vercel from '../../assets/skills/vercel.png';
import npm from '../../assets/skills/npm.png';



import './Skills.css';
const Skills = () => {
    return (
        <div className='w-[90%] mx-auto mt-12'>
            {/* Top About Text */}
            <div className='flex justify-center my-10'>
                {/* left Line */}
                <div className='border-4 mt-7 w-[250px] h-0'>

                </div>

                {/* Text */}
                <div>
                    <h1 className='text-white text-6xl text-center font-extrabold lg:mx-5'>Skills <span className='text-green-400'>I Have</span></h1>

                </div>

                {/* Right Line */}
                <div className='border-4 mt-7 w-[250px] h-0'>

                </div>
            </div>

            {/* Skills section */}

            <div className="bg-gray-500 rounded-lg bg-opacity-75 p-10">
                {/* Expertise section */}
                <div >
                    <h1 className='text-4xl text-white text-center my-5'>Expertise</h1>
                    <div className='md:flex justify-around flex-wrap'>
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={html} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={css} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={js} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={react} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={tailwind} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={bootstrap} alt="" />
                    </div>
                    <hr />
                </div>
                {/* Comfortable Section */}
                <div>
                    <h1 className='text-4xl text-white text-center my-5'>Comfortable</h1>
                    <div className='md:flex justify-around'>
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={node} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={express} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={mongodb} alt="" />
                    </div>
                    <hr />
                </div>
                {/* Familiar Section */}
                <div>
                    <h1 className='text-4xl text-white text-center my-5'>Familiar</h1>
                    <div className='md:flex justify-around'>
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={nextJs} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={redux} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={typescript} alt="" />
                    </div>
                    <hr />
                </div>
                {/* Tools Section */}
                <div>
                    <h1 className='text-4xl text-white text-center my-5'>Tools</h1>
                    <div className='md:flex justify-around flex-wrap'>
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={git} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={github} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={firebase} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={figma} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={vscode} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={npm} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={msoffice} alt="" />
                        <img className='w-[100px] mx-auto md:mx-0 my-3' src={vercel} alt="" />
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Skills;