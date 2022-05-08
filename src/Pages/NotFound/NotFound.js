import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div style={{width: '100%',height: '100vh'}} className='d-flex justify-content-center align-items-center'>
            <div>
                <h2 className='text-warning fs-1 mb-4'>404</h2>
                <p className='fs-1 text-warning'>Not Found</p>
            </div>
        </div>
    );
};

export default NotFound;