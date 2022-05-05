import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100' style={{height: '100vh'}}>
            <Spinner animation='border' variant='warning'>
            </Spinner>
        </div>
    );
};

export default Loading;