import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { AiOutlineBuild } from "react-icons/ai";
import Name from './Name/Name';
const NavigationBar = () => {


    const navItems = <>
        <li className='text-white hover:text-red-600 font-bold'><NavLink to='/about' className={({ isActive }) => isActive ? "active" : undefined}>About</NavLink></li>
        <li className='text-white hover:text-red-600 font-bold'><NavLink to='/'>Portfolio</NavLink></li>
        <li className='text-white hover:text-red-600 font-bold'><NavLink to='/contactMe'>Contact Me</NavLink></li>
        <li className='text-white hover:text-red-600 font-bold'><NavLink to='/hireMe'>Hire Me</NavLink></li>
    </>
    return (
        <div className='bg-sky-500'>
            <div className="navbar  " >
                <div className="navbar-start flex justify-between lg:block w-[100%]">

                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-sky-500 menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52" style={{ backgroundColor: '' }}>
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' >

                        <span className='flex'>
                            <AiOutlineBuild className='text-white text-4xl'> </AiOutlineBuild>

                            <span>
                                <span className=" text-2xl text-white font-bold">Md Merazul Amin</span>
                                <p className='text-white'>Junior Mern Stack Web Developer</p>
                            </span>
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {navItems}

                    </ul>
                </div>
            </div>
            <div className='hidden md:block'>
                <Name></Name>
            </div>
        </div>
    );
};

export default NavigationBar;