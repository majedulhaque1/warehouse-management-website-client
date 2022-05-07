import React,{useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import './ManageItems.css';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageItems = () => {
    const [user] = useAuthState(auth);
    // const [products, setProducts] = useProducts();
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/additem')
        .then(res => res.json())
        .then(data =>{
            const userAddProduct = data.filter(p => p.email === user?.email);
            setProducts(userAddProduct);
        })
    },[user?.email])
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
        </div>
    );
};

export default ManageItems;