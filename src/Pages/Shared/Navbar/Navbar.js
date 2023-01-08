import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import avatar from '../../../assets/top-photo.jpg';
import DarkModeToggle from "react-dark-mode-toggle";
import { DarkLightContext } from '../../../contexts/ThemeContext/ThemeContext';

const NavigationBar = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkLightContext);
    console.log(isDarkMode);

    const navItems = <>
        <li className='text-white hover:text-red-600 font-bold'><NavLink to='/'>Portfolio</NavLink></li>
        <li className='text-white hover:text-red-600 font-bold'><NavLink to='/about' className={({ isActive }) => isActive ? "active" : undefined}>About Me</NavLink></li>
        <li className='text-white hover:text-red-600 font-bold'><NavLink to='/contactMe'>Contact Me</NavLink></li>

        <li className='text-white hover:text-red-600 font-bold'><NavLink><DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={50}
        /></NavLink></li>
        <li>
        </li>
    </>
    return (
        <div className='h-[80px]'>
            <div className="navbar p-0 h-[80px]" >
                <div className="navbar-start flex justify-between h-[80px]  lg:block w-[100%]">

                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-sky-500 menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52" style={{ backgroundColor: '' }}>
                            {navItems}
                        </ul>
                    </div>


                    <Link to='/' >

                        <div className='flex'>

                            <div className='mx-2 mt-2'>
                                <img className='w-[40px] h-[40px] rounded-full' src={avatar} alt='/' />
                            </div>

                            <div>
                                <span className=" text-2xl text-white font-bold">Md Merazul Amin</span>
                                <p className='text-white'>Junior Mern Stack Web Developer</p>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">

                        {navItems}

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default NavigationBar;