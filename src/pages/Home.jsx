import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className=''>
            <div className='flex justify-center items-center h-screen'>
                <div className='w-[600px] bg-gray-100/70 backdrop-blur-sm shadow-xl rounded-2xl p-10'>
                    <div className='text-center '>
                        <h1 className='text-6xl text-black tracking-wide'>Welcome to Property Management,</h1>
                        <p className='text-xl text-gray-700 pt-5'>where we make property management simple, reliable, and stress-free for owners and tenants alike.</p>
                    </div>
                    <div className='flex justify-between mt-5 mx-10'>
                        <Link to="/ShowProperties">
                            <button className='flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 w-48 justify-center py-1 font-bold text-white rounded-lg '>View Properties<FaArrowCircleRight className='text-lg' /></button>
                        </Link>
                        <Link to="/add">
                            <button className='flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 w-48 justify-center py-1 font-bold text-white rounded-lg '>Add Properties<IoMdAddCircle className='text-xl' /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
