import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProperties } from '../services/api.js';
import PropertyDetails from '../components/PropertyDetails'
import { FaHome } from "react-icons/fa";

function ShowProperties() {
    const [properties, setProperties] = useState([]); // State to store properties

    // Fetch properties on component mount
    useEffect(() => {
        const getProperties = async () => {
            try {
                const response = await fetchProperties();
                setProperties(response.data); // Set the fetched data into the state
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        getProperties(); // Call the function to fetch properties
    }, []); // Empty dependency array to run the effect only once on component mount


    return (
        <div className='h-full p-5'>
            <div className='h-full w-full rounded bg-gray-200/70 backdrop-blur-sm  p-5'>
                <div className='flex items-center'>
                    <Link to="/">
                        <button className='flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 font-bold text-white px-5 py-2 rounded-lg'>Back To Home <FaHome /></button>
                    </Link>
                    <h1 className='mx-auto text-6xl font-semibold'>Properties</h1>
                </div>
                <div className='flex flex-wrap justify-center mx-0'>
                    {properties.map((property) => (
                        <PropertyDetails
                            key={property.id}
                            title={property.title}
                            type={property.type}
                            Purpose={property.purpose}
                            Price={property.price}
                            Satuts={property.status}
                            Address={property.address || "Address not provided"}
                            Description={property.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShowProperties