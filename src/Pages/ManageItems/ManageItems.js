import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import './ManageItems.css';

const ManageItems = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='' style={{width : '90%', margin: "0 auto"}}>
            <h2 className='text-center text-primary my-5'>Manage Items</h2>
            <Table striped bordered hover>
                <thead>
                    <tr className='my-5'>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Suplier Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product._id} className='my-5'>
                                <td>{product._id}</td>
                                <td><img className='w-100' style={{ height: "60px"}} src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td><button className='px-4 d-block ms-auto btn btn-success'>Update stock</button></td>
                                <td><button className='d-block ms-auto px-4 btn btn-danger'>Delete</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
            {/* <div className='d-flex w-75 mx-auto shadow-lg p-3 manage-items-container'>
                <img src="https://i.ibb.co/dGDkr4v/1.jpg" alt="" />
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='product-info'>
                        <h2 className='fs-3'>Name here</h2>
                        <p className='fs-6'>Description here</p>
                        <p>Price: <small>Price here</small></p>
                        <p>Quantity: <small>Quantity here</small></p>
                        <p>Suplier Name: <small>Suplier Name here</small></p>
                    </div>
                    <button className='custom-delete-btn'>Delete</button>
                </div>
            </div> */}
        </div>
    );
};

export default ManageItems;