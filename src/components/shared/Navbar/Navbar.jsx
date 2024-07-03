import { Link } from "react-router-dom";
import './Navbar.css';
import React from 'react';

const Navbar = () => {
    const scroll = (id_name) => {
        const section = document.querySelector(`#${id_name}`);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const menuItems = <React.Fragment>
        <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
            onClick={() => scroll('banner')} >
            <Link to="/">Home</Link></li>

        <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
            onClick={() => scroll('skills')} >
            <Link to="/"> Skills</Link >
        </li>

        <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
            onClick={() => scroll('projects')} >
            <Link to="/">Projects</Link>
        </li>

        <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
            onClick={() => scroll('about-me')} >
            <Link to="/">About me</Link>
        </li>
        <li className='transition ease-in-out delay- hover:-translate-y-1 hoverx:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
        onClick={() => scroll('blog')}>
            <Link to='/'>Blog</Link>
        </li>
        <li
            onClick={() => scroll('contact')} className='mx-0 bg-gradient-to-r from-[#ECF0F3] to-white lg:mr-12 font-bold rounded-lg text-[#EB3E0D] shadow-lg shadow-[#c6c7c9]  shake
            transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-white'><Link >Contact</Link></li>
    </React.Fragment >

    return (
        <div>
            <div className="navbar bg-base-100 text-lg font-bold text-[#2f373e] fixed top-0 z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <div className='ml-8 lg:pl-8'>
                        <h1 className='text-xl tracking-[3px] font-sans text-orange-600 text-shadow-lg
                        transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-slate-100 duration-900 hover:rounded-md hover:shadow-lg hover:shadow-white hover:p-2 hover:cursor-pointer
                        '
                            onClick={() => scroll('banner')}> <Link to='/'>Portfolio Website </Link></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;