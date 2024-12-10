import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function PropertyDetails(props) {
    return (
        <div className='p-10'>

            <div className='bg-gray-100/70 backdrop-blur-sm shadow-lg w-80 rounded-lg py-4 px-5'>
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold tracking-wide text-purple-600'>{props.title}</h1>
                </div>
                <div className='pt-3'>
                    <p><span className='font-semibold'>Type:</span> <span className='text-gray-800'>{props.type}</span></p>
                    <p><span className='font-semibold'>Purpose:</span> <span className='text-gray-800'>{props.Purpose}</span></p>
                    <p><span className='font-semibold'>Price:</span> <span className='text-gray-800'>{props.Price}</span></p>
                    <p><span className='font-semibold'>Satuts:</span> <span className='text-gray-800'>{props.Satuts}</span></p>
                    <p><span className='font-semibold'>Addres:</span> <span className='text-gray-800'>{props.Address}</span></p>
                    <p><span className='font-semibold'>Description:</span> <span className='text-gray-800'>{props.Description}</span></p>
                </div>
                <div className='flex justify-between pt-3 px-10'>
                    <button className='flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 py-1 w-24 rounded-lg font-bold text-white tracking-wide'>Edit<MdEdit /></button>
                    <button className='flex items-center justify-center bg-red-500 hover:bg-red-600 py-1 w-24 rounded-lg font-bold text-white tracking-wide'>Delete<MdDelete /></button>
                </div>
            </div>
        </div>

    )
}

export default PropertyDetails
