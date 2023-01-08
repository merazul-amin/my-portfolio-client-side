import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { ImPlus } from "react-icons/im";
import { HiCode } from "react-icons/hi";
import { BiDesktop } from "react-icons/bi";
import { IoMdFootball } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";

const About = () => {
    return (
        <div className='mt-8 w-[90%] mx-auto'>

            {/* Top About Text */}
            <div className='flex justify-center'>
                {/* left Line */}
                <div className='border-4 mt-7 w-[250px] h-0'>

                </div>

                {/* Text */}
                <div>
                    <h1 className='text-white text-6xl text-center font-extrabold lg:mx-5'>ABOUT <span className='text-green-400'>ME</span></h1>
                    <p className='text-white text-center'>Let me introduce Myself</p>
                </div>

                {/* Right Line */}
                <div className='border-4 mt-7 w-[250px] h-0'>

                </div>
            </div>


            {/* Photo with info */}
            <div className='lg:flex justify-around mt-9'>
                {/* img div */}
                <div className=' lg:w-[40%] mx-auto'>
                    <img className='w-[400px] rounded-full' src='https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/264465044_1080345376152777_954338581463356890_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHbPIhBvdz_RW5sm5E4qYaDqI8ilyZWS3yojyKXJlZLfLGoxfbHHXYBM541yNwdV360UwHB7YgcYJYBBjZbcDux&_nc_ohc=saVg1nE8wqIAX8mz0xC&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfDCir22fIJheUbPGd-58yZQYCWyH6hC5OnHsmxkL7Pf0g&oe=63BE106D' alt="" />
                </div>
                {/* right about div */}
                <div className='text-white lg:w-[60%] mx-auto lg:mt-12'>
                    <div>
                        <h1>Full Name:- Md Merazul Amin Saikut</h1>
                        <p>Address:- Cumilla, Bangladesh.</p>
                        <p >Email:- <a className='hover:text-green-400' href="mailto:merazulamin2122@yahoo.com">merazulamin2122@yahoo.com</a></p>
                        <p>Contact:- +8801810476369</p>
                    </div>
                    <div>
                        <h1 className='text-2xl mt-4 font-bold'>Some Info</h1>
                        <p className='text-justify'>I love to develop website. I am a programming enthusiast. I always try to learn and understand new thing. Coding is my passion. I love technology from my childhood. I am very serious with my work. I try heart and soul till I can finish my work. My duties are my first priority. I give all my effort to my duties.I always like to maintain time and try my best to maintain it.</p>
                    </div>
                </div>

            </div>

            {/* Bottom info */}
            <div className='text-white mt-10 lg:flex'>
                {/* Things I Love */}
                <div className='lg:w-[40%] mx-auto'>
                    <h1 className='uppercase text-2xl font-bold'>Things I love</h1>
                    <div className='ml-4'>
                        <p><HiCode className='text-white text-2xl mr-2 inline'></HiCode>Programming And coding.</p>
                        <p><BiDesktop className='text-white text-2xl mr-2 inline'></BiDesktop>Computer related technology and work.</p>
                        <p><IoMdFootball className='text-white text-2xl mr-2 inline'></IoMdFootball>Playing and watching football.</p>
                        <p> <MdTravelExplore className='text-white text-2xl mr-2 inline'></MdTravelExplore>Explore new website & computer technology.</p>
                    </div>

                </div>
                {/* What can I do */}
                <div className='lg:w-[60%] mx-auto mt-5 lg:mt-0'>
                    <h1 className='uppercase text-2xl font-bold'>What can I do</h1>
                    <div className='ml-4'>
                        <p ><ImPlus className='inline mr-2'></ImPlus>Make Website with Plane html, css, Javascript.</p>
                        <p ><ImPlus className='inline mr-2'></ImPlus>Make Website with Css Framework. Such as bootstrap, tailwind.</p>
                        <p ><ImPlus className='inline mr-2'></ImPlus>Can use many components library of tailwind.</p>
                        <p ><ImPlus className='inline mr-2'></ImPlus>Make website with most familiar and famous frontend library react js.</p>
                        <p ><ImPlus className='inline mr-2'></ImPlus>Website with authentication and authorization.</p>
                        <p ><ImPlus className='inline mr-2'></ImPlus>Backend with Node and Express js. For Database Mongodb.</p>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;