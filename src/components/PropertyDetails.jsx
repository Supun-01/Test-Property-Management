import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

function PropertyDetails({ id, title, type, Purpose, Price, Satuts, Address, Description, onDelete }) {
    return (
        <div className='p-10'>
            <div className='bg-gray-100/70 backdrop-blur-sm shadow-lg w-80 rounded-lg py-4 px-5'>
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold tracking-wide text-purple-600'>{title}</h1>
                </div>
                <div className='pt-3'>
                    <p><span className='font-semibold'>Type:</span> <span className='text-gray-800'>{type}</span></p>
                    <p><span className='font-semibold'>Purpose:</span> <span className='text-gray-800'>{Purpose}</span></p>
                    <p><span className='font-semibold'>Price:</span> <span className='text-gray-800'>{Price}</span></p>
                    <p><span className='font-semibold'>Satuts:</span> <span className='text-gray-800'>{Satuts}</span></p>
                    <p><span className='font-semibold'>Address:</span> <span className='text-gray-800'>{Address}</span></p>
                    <p><span className='font-semibold'>Description:</span> <span className='text-gray-800'>{Description}</span></p>
                </div>
                <div className='flex justify-between pt-3 px-10'>
                    <Link to={`/edit/${id}`}>
                        <button className='flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 py-1 w-24 rounded-lg font-bold text-white tracking-wide'>Edit<MdEdit /></button>
                    </Link>
                    <button
                        className='flex items-center justify-center bg-red-500 hover:bg-red-600 py-1 w-24 rounded-lg font-bold text-white tracking-wide'
                        onClick={() => onDelete(id)} // Call onDelete with the property ID
                    >
                        Delete<MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PropertyDetails;
