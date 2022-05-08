import React from 'react';
import useProducts from '../../hooks/useProducts';
import './ManageInventories.css';
import { Table } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    const handleAddItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const item = { name, price, quantity, img, description };


        
        fetch('https://quiet-brushlands-43785.herokuapp.com/additem', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
            })
    }

    const handleUpdateStock = (id) =>{
        navigate(`/inventory/${id}`);
    }

    const handleDelete = (id) =>{
        const procced = window.confirm('Are you sure you want to delete?');
        if(procced){
        fetch(`https://quiet-brushlands-43785.herokuapp.com/additem/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    }
    return (
        <div className='manage-container'>
            <h2 className='text-center text-warning my-5'>Manage Inventories</h2>
            <div className='manage-form-container d-block mx-auto'>

                <form className='manage-form d-flex justify-content-between shadow-lg' onSubmit={handleAddItem} action="">
                    <div className='w-100 me-5'>

                        <input type="text" name='name' placeholder='Title' required />
                        <br />
                        <input type="number" name='price' placeholder='Price' required />
                        <br />
                        <input type="number" name='quantity' placeholder='Quantity' required />
                        <br />
                    </div>
                    <div className='w-100'>

                        <input type="text" name='img' placeholder='imgurl' required />
                        <br />
                        <textarea name="description" id="" cols="30" rows="2" required></textarea>
                        <br />
                        <input className='btn btn-warning text-white' type="submit" value="Add Item" />
                    </div>
                </form>
            </div>
            <div className='w-75 mx-auto'>
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
                            <th>Update Stock</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr key={product._id} className='my-5'>
                                    <td>{product._id}</td>
                                    <td><img style={{ width: "100px", height: "60px" }} src={product.img} alt="" /></td>
                                    <td>{product.name}</td>
                                    <td>{product.email}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.supliername}</td>
                                    <td><button onClick={() => handleUpdateStock(product._id)} className='btn btn-success'>Update stock</button></td>
                                    <td><button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default ManageInventories;