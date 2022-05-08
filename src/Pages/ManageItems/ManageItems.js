import React,{useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import './ManageItems.css';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const ManageItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        fetch('https://quiet-brushlands-43785.herokuapp.com/additem')
        .then(res => res.json())
        .then(data =>{
            const userAddProduct = data.filter(p => p.email === user?.email);
            setProducts(userAddProduct);
        })
    },[user?.email])

    const handleUpdateQuantity = (id) =>{
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
            const remaining = products.filter(p => p._id !== id);
            setProducts(remaining);
        })
    }
    }
    return (
        <div className='' style={{width : '90%', margin: "0 auto"}}>
            <h2 className='text-center text-warning my-5'>Manage Items</h2>
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
                        <th>Update Quantity</th>
                        <th>Delete product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product._id} className='my-5'>
                                <td>{product._id}</td>
                                <td><img className='w-100' style={{ height: "60px"}} src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.quantity}</td>
                                <td><button onClick={() => handleUpdateQuantity(product._id)} className='px-4 d-block ms-auto btn btn-success'>Update stock</button></td>
                                <td><button onClick={() => handleDelete(product._id)} className='d-block ms-auto px-4 btn btn-danger'>Delete</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ManageItems;