import React, {useState, useEffect, useRef} from 'react';
import './inventory.css';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
const Inventory = () => {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useProducts();
    const {_id, name, img, description, price, quantity} = product;
    let [updateQuantity, setUpdateQuantity] = useState(product.quantity);
    console.log(updateQuantity);
    const {itemId} = useParams();

    useEffect(() =>{
        const url = `http://localhost:5000/additem/${itemId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[itemId,setProducts])

    const handleUpdateQuantity = (e) =>{
        e.preventDefault();
        const quantityValue = e.target.quantityValue.value;
        let itemQuantity = product.quantity;
        // if(itemQuantity > 0){
        //     return;
        // }
        if(itemQuantity === null || itemQuantity === "" || itemQuantity === -1){
            itemQuantity = 1;
        }
        const quantity = parseInt(itemQuantity) + parseInt(quantityValue);
        setUpdateQuantity(quantity);
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
        .then(data => {
            setProducts(data);
            e.target.reset();
        })
    }


    const handleDelevered = () =>{
        // let itemQuantity = product.quantity;
        // if(itemQuantity === null || itemQuantity === "" || itemQuantity < 0){
        //     itemQuantity = 1;
        // }
        const quantity = parseInt(updateQuantity) - 1;
        setUpdateQuantity(quantity);
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
        .then(data => {
            setProducts(data);
        })
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
                    <h4>Quantity: <small>{updateQuantity === undefined ? quantity : updateQuantity}</small></h4>
                    <h4>Suplier Name: <small>Suplier Name</small></h4>
                    <button onClick={handleDelevered} className='delevered-button'>Delevered</button>
                </div>
            </div>
            <Link className='manageinventory-btn' to={'/manage-inventory'}>Manage Inventorey</Link>
        </div>
    );
};

export default Inventory;