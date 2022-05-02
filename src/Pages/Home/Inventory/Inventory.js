import React, {useState, useEffect} from 'react';
import './inventory.css';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Inventory = () => {
    const [product, setProduct] = useState({});
    const {_id, name, img, description, price, quantity} = product;
    const {itemId} = useParams();

    useEffect(() =>{
        const url = `http://localhost:5000/additem/${itemId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleUpdateQuantity = (e) =>{
        e.preventDefault();
        const quantityValue = e.target.quantityValue.value;
        let itemQuantity = product.quantity;
        if(itemQuantity === null || itemQuantity === ""){
            itemQuantity = 0;
        }
        const quantity = parseInt(itemQuantity) + parseInt(quantityValue);
        console.log(quantity);
        const url = `http://localhost:5000/additem/${itemId}`;
        fetch(url,{
            method: "PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify({quantity})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='inventory-container'>
            <h2 className='text-center text-primary my-5'>Welcome to inventory.</h2>
            <form className='form' onSubmit={handleUpdateQuantity} action="">
                <input type="number" name='quantityValue' placeholder='Product Quantity' />
                <input className='button-style' type="submit" value="Update stock" />
            </form>
            <div className='product d-flex mx-auto shadow-lg'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h2>{name}</h2>
                    <p>Description: {description}</p>
                    <h4>Price: <small>{price}</small></h4>
                    <h4>Quantity: <small>{quantity}</small></h4>
                    <h4>Suplier Name: <small>Suplier Name</small></h4>
                    <button className='delevered-button'>Delevered</button>
                </div>
            </div>
            <Link className='manageinventory-btn' to={'/manage-inventory'}>Manage Inventorey</Link>
        </div>
    );
};

export default Inventory;