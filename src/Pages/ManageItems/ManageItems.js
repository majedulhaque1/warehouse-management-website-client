import React from 'react';
import './ManageItems.css';

const ManageItems = () => {
    return (
        <div>
            <h2 className='text-center text-primary my-5'>Manage Items</h2>
            <div className='d-flex w-75 mx-auto shadow-lg p-3 manage-items-container'>
                <img src="https://i.ibb.co/dGDkr4v/1.jpg" alt="" />
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div>
                        <h2>Name here</h2>
                        <p>Description here</p>
                        <p><small>Price here</small></p>
                        <p><small>Quantity here</small></p>
                        <p><small>Suplier Name here</small></p>
                    </div>
                    <button className='custom-delete-btn'>Delete</button>

                </div>
            </div>
        </div>
    );
};

export default ManageItems;