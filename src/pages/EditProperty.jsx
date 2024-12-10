import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchPropertyById, updateProperty } from '../services/api';
import PropertyForm from '../components/PropertyForm';


function EditProperty() {
    const { id } = useParams(); // Get the ID from the URL
    const [formValues, setFormValues] = useState({
        title: '',
        type: '',
        purpose: '',
        price: '',
        status: true,
        description: '',
        address: ''
    });

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetchPropertyById(id);
                setFormValues(response.data);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        fetchProperty();
    }, [id]);

    const handleSubmit = async () => {
        try {
            await updateProperty(id, formValues);
            alert('Property updated successfully!');
        } catch (error) {
            console.error('Error updating property:', error);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[1000px]'>
                <PropertyForm
                    formTitle="Edit Property"
                    buttonName="Save Changes"
                    formValues={formValues}
                    setFormValues={setFormValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default EditProperty;
