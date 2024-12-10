import React from 'react'
import PropertyForm from '../components/PropertyForm'

function EditProperty() {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='w-[1000px]'>
                    <PropertyForm
                        formTitle="Edit property"
                        buttonName="Edit Property"
                    />
                </div>
            </div>
        </div>
    )
}

export default EditProperty
