import React, { useState } from 'react';
import PropertyForm from '../components/PropertyForm';
import { createProperty } from '../services/api';

function AddProperty() {
    const [formValues, setFormValues] = useState({
        title: '',
        type: '',
        purpose: '',
        price: '',
        status: true,
        description: '',
        address: '',
    });

    const handleSubmit = () => {
        createProperty(formValues)
            .then((response) => {
                alert('Property added successfully!');
                console.log('Added property:', response.data);
            })
            .catch((error) => {
                console.error('Error adding property:', error);
                alert('Failed to add property. Please try again.');
            });
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[1000px]'>
                <PropertyForm
                    formTitle="Add Property"
                    buttonName="Add Property"
                    formValues={formValues}
                    setFormValues={setFormValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddProperty;
