import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://quiet-brushlands-43785.herokuapp.com/additem')
        .then(res => res.json())
        .then(data =>{
            const userAddProduct = data.filter(p => p.email === user?.email);
            setProducts(userAddProduct);
        })
    },[user?.email])
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center text-warning my-5'>Your Items</h2>
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
                                <td><img style={{width: "100px", height: "60px"}} src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.supliername}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;