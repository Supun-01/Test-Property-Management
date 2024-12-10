import React from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function PropertyForm({ formTitle, buttonName, formValues, setFormValues, onSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: name === 'status' ? value === 'true' : value, // Convert status to boolean
        });
    };

    return (
        <div className='m-10 p-10 rounded-lg shadow-lg backdrop-blur-sm bg-gray-200/70'>
            <div className='flex items-center'>
                <Link to="/">
                    <button className='flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 font-bold text-white px-5 py-2 rounded-lg'>
                        Back To Home <FaHome />
                    </button>
                </Link>
                <h1 className='mx-auto text-5xl text-center tracking-wide'>{formTitle}</h1>
            </div>

            <div className='flex'>
                <div className='w-1/2'>
                    <div className='mt-3'>
                        <label className='text-xl font-light'>Title:</label>
                        <input
                            name="title"
                            value={formValues.title}
                            onChange={handleChange}
                            className='outline-none ring px-2 py-1 rounded text-lg ring-cyan-500 focus:ring-cyan-600 w-full'
                            type="text"
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='text-xl font-light'>Type:</label>
                        <input
                            name="type"
                            value={formValues.type}
                            onChange={handleChange}
                            className='outline-none ring px-2 py-1 rounded text-lg ring-cyan-500 focus:ring-cyan-600 w-full'
                            type="text"
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='text-xl font-light'>Purpose:</label>
                        <input
                            name="purpose"
                            value={formValues.purpose}
                            onChange={handleChange}
                            className='outline-none ring px-2 py-1 rounded text-lg ring-cyan-500 focus:ring-cyan-600 w-full'
                            type="text"
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='text-xl font-light'>Price:</label>
                        <input
                            name="price"
                            value={formValues.price}
                            onChange={handleChange}
                            className='outline-none ring px-2 py-1 rounded text-lg ring-cyan-500 focus:ring-cyan-600 w-full'
                            type="text"
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='block text-xl font-light'>Status:</label>
                        <select
                            name="status"
                            value={formValues.status}
                            onChange={handleChange}
                            className='w-full outline-none px-2 py-1 rounded ring text-lg ring-cyan-500 focus:ring-cyan-600'
                        >
                            <option value={true}>Available</option>
                            <option value={false}>Not-Available</option>
                        </select>
                    </div>
                    <div className='mt-3'>
                        <label className='block text-xl font-light'>Description:</label>
                        <textarea
                            name="description"
                            value={formValues.description}
                            onChange={handleChange}
                            className='w-full h-32 rounded outline-none px-2 py-1 ring ring-cyan-500 focus:ring-cyan-600'
                        ></textarea>
                    </div>
                </div>
                <div className='mt-3 w-1/2 pl-2'>
                    <label className='block text-xl font-light'>Address:</label>
                    <textarea
                        name="address"
                        value={formValues.address}
                        onChange={handleChange}
                        className='w-full h-32 rounded outline-none px-2 py-1 ring ring-cyan-500 focus:ring-cyan-600'
                    ></textarea>
                </div>
            </div>

            <div className='flex justify-center mt-3'>
                <button
                    className='flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-10 py-1 text-white font-bold rounded-lg'
                    onClick={onSubmit}
                >
                    {buttonName}
                    <MdCloudUpload />
                </button>
            </div>
        </div>
    );
}

export default PropertyForm;
