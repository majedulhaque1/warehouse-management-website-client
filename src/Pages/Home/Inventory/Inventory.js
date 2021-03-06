import React, {useState, useEffect} from 'react';
import './inventory.css';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
const Inventory = () => {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useProducts();
    const {_id, name, img, description, price, quantity} = product;
    const {itemId} = useParams();
    let [updateQuantity, setUpdateQuantity] = useState();
    useEffect(() =>{
        if(!updateQuantity){
            setUpdateQuantity(quantity);
        }
        else if(updateQuantity < 0){
            alert('Nagative value no accept');
            setUpdateQuantity(0);
        }
    },[quantity, updateQuantity])

    useEffect(() =>{
        const url = `https://quiet-brushlands-43785.herokuapp.com/additem/${itemId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[itemId])

    const handleUpdateQuantity = (e) =>{
        e.preventDefault();
        let itemQuantity = product.quantity;
        if(updateQuantity === null || updateQuantity === isNaN) {
            setUpdateQuantity(itemQuantity);
        }
        const quantityValue = e.target.quantityValue.value;
        const quantity = parseInt(quantityValue) + parseInt(updateQuantity);
        setUpdateQuantity(quantity);
        console.log(quantity);
        const url = `https://quiet-brushlands-43785.herokuapp.com/additem/${itemId}`;
        fetch(url,{
            method: "PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify({quantity})
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            e.target.reset();
        })
    }


    const handleDelevered = () =>{
        let itemQuantity = product.quantity;
        if(updateQuantity < 0 || itemQuantity < 0){
            alert('nagivative value not accept');
            itemQuantity = 0;
            setUpdateQuantity(0);
        }
        const quantity = parseInt(updateQuantity) - 1;
        setUpdateQuantity(quantity);
        console.log(quantity);
        const url = `https://quiet-brushlands-43785.herokuapp.com/additem/${itemId}`;
        fetch(url,{
            method: "PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify({quantity})
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }
    return (
        <div className='inventory-container'>
            <h2 className='text-center text-warning my-5'>Welcome to inventory.</h2>
            <form className='form' onSubmit={handleUpdateQuantity} action="">
                <input type="number" name='quantityValue' placeholder='Product Quantity' required />
                <input className='btn btn-warning text-white' type="submit" value="Update stock" />
            </form>
            <div className='product d-flex mx-auto shadow-lg'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h2 className='text-warning'>{name}</h2>
                    <p>Description: {description}</p>
                    <h4>Price: <small>{price}</small></h4>
                    <h4>Quantity: <small>{updateQuantity}</small></h4>
                    <h4>Suplier Name: <small>Suplier Name</small></h4>
                    <button onClick={handleDelevered} className='btn btn-warning text-white d-block ms-auto me-4'>Delevered</button>
                </div>
            </div>
            <Link className='btn btn-warning text-white d-block w-25 mt-5 mx-auto' to={'/manage-inventory'}>Manage Inventorey</Link>
        </div>
    );
};

export default Inventory;