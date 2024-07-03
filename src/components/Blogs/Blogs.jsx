import React from 'react';
import comingSoon from '../../assets/images/coming-soon.webp';

const Blogs = () => {
    return (
        <div>
            <h1 className="font-serif text-5xl font-bold">My Blogs</h1>
            < div className='bg-white my-10 pt-20 mx-[12%] flex justify-center items-center' id='blog'>   
                <div>
                    <img className='w-5/12 mx-auto' src={comingSoon} alt="" />
                </div>
            </div >
        </div>
    );
};

export default Blogs;