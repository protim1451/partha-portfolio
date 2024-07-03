import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: 'CozyHomes',
        description: 'Explore a diverse range of homes and apartments tailored to your lifestyle, from cozy townhouses and modern lofts to spacious family homes. Securely register and log in to access personalized features and save your favorite properties. Enjoy the convenience of social login integration, allowing you to sign up or log in quickly using your existing social media accounts. Experience a smooth browsing experience across all devices, including desktops, smartphones, and tablets, with our responsive design. Our interactive property listings provide detailed information, high-quality images, amenities, and location details to help you make informed decisions.',
        link: 'https://b9a9-real-estate-protim1451.web.app',
        repo: 'https://github.com/protim1451/task-9-'
    },
    {
        name: 'BookNest',
        description: 'This web application allows users to manage books, borrow books, and view book details. It features a frontend built with React.js, React Router, Axios, and SweetAlert2, while the backend is powered by Node.js, Express.js, and MongoDB. Authentication is handled using JSON Web Tokens (JWT), and the styling is implemented with Tailwind CSS. The database is hosted on MongoDB Atlas.',
        link: 'https://b9a11-client-side-protim1451.web.app/',
        repo: 'https://github.com/protim1451/task-11-client'
    },
    {
        name: 'PetConnect',
        description: 'PetConnect is a comprehensive solution for pet adoption, enabling users to create and manage pet adoption campaigns, make donations, and process adoption requests, with the aim of making pet adoption easier and more transparent. The project utilizes technologies such as React, Vite, Tailwind CSS, Flowbite, and Firebase for authentication on the frontend, while the backend is built with Express.js, Node.js, and MongoDB for data storage.',
        link: 'https://petconnect-1dace.web.app',
        repo: 'https://github.com/protim1451/task-12'
    }
];

const Projects = () => {
    return (
        <section className="p-8 bg-gray-200" id='projects'>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(project => (
                    <motion.li
                        key={project.name}
                        className="bg-white p-4 shadow rounded bg-blue-100 hover:bg-blue-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                        <p className="mb-2">{project.description}</p>
                        <div className='flex gap-6 justify-center'>
                            <a href={project.link} target='_blank' rel="noopener noreferrer" className="text-blue-500">Live URL</a>
                            <a href={project.repo} target='_blank' rel="noopener noreferrer" className="text-blue-500">Github Repo</a>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
