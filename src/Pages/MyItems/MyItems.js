import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';

const MyItems = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center text-primary'>Your Items</h2>
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
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;