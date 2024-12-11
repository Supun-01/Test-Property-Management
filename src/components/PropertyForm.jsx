import React, { useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function PropertyForm({ formTitle, buttonName, formValues, setFormValues, onSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: name === 'status' ? value === 'true' : value, // Convert status to boolean
        });
    };

    const handleMapClick = (latlng) => {
        const { lat, lng } = latlng;

        // Use reverse geocoding to fetch the address (mocking this step for simplicity)
        const mockAddress = `Lat: ${lat}, Lng: ${lng}`; // Replace with API call for reverse geocoding
        setFormValues({
            ...formValues,
            address: mockAddress,
            location: { lat, lng },
        });
    };

    function LocationMarker() {
        useMapEvents({
            click(e) {
                handleMapClick(e.latlng);
            },
        });
        return formValues.location ? <Marker position={formValues.location} /> : null;
    }

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
                <div className='w-1/2 pl-5'>
                    <div className='mt-3'>
                        <label className='block text-xl font-light'>Address:</label>
                        <textarea
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                            className='w-full h-32 rounded outline-none px-2 py-1 ring ring-cyan-500 focus:ring-cyan-600'
                        ></textarea>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-xl font-light'>Select Location on Map:</h2>
                        <div className='ring ring-cyan-500 rounded focus:ring-cyan-600'>
                            <MapContainer
                                center={formValues.location}
                                zoom={13}
                                scrollWheelZoom={false}
                                className="h-64 w-full rounded"
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <LocationMarker />
                            </MapContainer>
                        </div>
                    </div>
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
